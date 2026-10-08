const VERSION = '0.5.10-cloudflare.1';
const SESSION_DAYS = 30;
const ADMIN_SESSION_HOURS = 12;
const MAX_BODY = 2 * 1024 * 1024;
const RECONNECT_GRACE_MS = 15_000;
const PBKDF2_ITERS = 120_000;

const PRODUCTS = Object.freeze({
  pack_scout:   { id:'pack_scout', name:'Scout Support Pack', amount:199, type:'payment' },
  pack_starter: { id:'pack_starter', name:'Starter Survivor Pack', amount:399, type:'payment' },
  pack_premium: { id:'pack_premium', name:'Premium Starter Pack', amount:899, type:'payment' },
  pack_operator:{ id:'pack_operator', name:'Operator Pack', amount:1799, type:'payment' },
  pack_warlord: { id:'pack_warlord', name:'Warlord Pack', amount:3499, type:'payment' },
  pack_founder: { id:'pack_founder', name:'Founder Pack', amount:5999, type:'payment' },
  dc_200:       { id:'dc_200', name:'200 DOVY Credits', amount:199, type:'payment' },
  dc_600:       { id:'dc_600', name:'600 DOVY Credits', amount:499, type:'payment' },
  dc_1350:      { id:'dc_1350', name:'1,350 DOVY Credits', amount:999, type:'payment' },
  dc_3000:      { id:'dc_3000', name:'3,000 DOVY Credits', amount:1999, type:'payment' },
  dc_8500:      { id:'dc_8500', name:'8,500 DOVY Credits', amount:4999, type:'payment' },
  dovy_plus:    { id:'dovy_plus', name:'DOVY+ Survivor', amount:799, type:'subscription' }
});

const enc = new TextEncoder();
const dec = new TextDecoder();

function bytesToB64url(bytes) {
  let s = '';
  const a = bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes);
  for (let i = 0; i < a.length; i++) s += String.fromCharCode(a[i]);
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}
function b64urlToBytes(s) {
  s = String(s || '').replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  const raw = atob(s), out = new Uint8Array(raw.length);
  for (let i = 0; i < raw.length; i++) out[i] = raw.charCodeAt(i);
  return out;
}
function randomToken(n = 32) { const b = new Uint8Array(n); crypto.getRandomValues(b); return bytesToB64url(b); }
function randomId() { return crypto.randomUUID(); }
function normalEmail(v){ return String(v || '').trim().toLowerCase(); }
function validEmail(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
function safeParse(s, fallback = {}) { try { return JSON.parse(s); } catch { return fallback; } }
function clamp(n, lo, hi){ return Math.max(lo, Math.min(hi, n)); }
function timingSafeEqualBytes(a, b) {
  if (!(a instanceof Uint8Array)) a = new Uint8Array(a);
  if (!(b instanceof Uint8Array)) b = new Uint8Array(b);
  if (a.length !== b.length) return false;
  let diff = 0; for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}
async function sha256Bytes(value) { return new Uint8Array(await crypto.subtle.digest('SHA-256', enc.encode(String(value)))); }
async function derivePassword(password, saltBytes) {
  const key = await crypto.subtle.importKey('raw', enc.encode(String(password)), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name:'PBKDF2', hash:'SHA-256', salt:saltBytes, iterations:PBKDF2_ITERS }, key, 256);
  return new Uint8Array(bits);
}
async function hashPassword(password) {
  const salt = new Uint8Array(16); crypto.getRandomValues(salt);
  const hash = await derivePassword(password, salt);
  return { salt: bytesToB64url(salt), hash: bytesToB64url(hash) };
}
async function verifyPassword(password, user) {
  try { return timingSafeEqualBytes(await derivePassword(password, b64urlToBytes(user.salt)), b64urlToBytes(user.hash)); }
  catch { return false; }
}

function parseCookies(request) {
  const out = {};
  const cookie = request.headers.get('cookie') || '';
  for (const part of cookie.split(';')) {
    const i = part.indexOf('='); if (i < 0) continue;
    try { out[part.slice(0, i).trim()] = decodeURIComponent(part.slice(i + 1).trim()); } catch {}
  }
  return out;
}
function cookie(name, value, maxAge, httpOnly = true) {
  return `${name}=${encodeURIComponent(value)}${httpOnly ? '; HttpOnly' : ''}; Secure; SameSite=Lax; Path=/; Max-Age=${maxAge}`;
}
function json(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), { status, headers: { 'content-type':'application/json; charset=utf-8', 'cache-control':'no-store', ...headers } });
}
async function body(request) {
  const raw = await request.arrayBuffer();
  if (raw.byteLength > MAX_BODY) throw new Error('body too large');
  if (!raw.byteLength) return {};
  return JSON.parse(dec.decode(raw));
}
async function authUser(request, env) {
  const token = parseCookies(request).dz_session;
  if (!token) return null;
  const row = await env.DB.prepare(`
    SELECT u.id,u.email,u.created_at,u.last_seen,u.banned,s.expires
    FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token=?
  `).bind(token).first();
  if (!row || Number(row.expires) < Date.now() || Number(row.banned)) {
    if (row) await env.DB.prepare('DELETE FROM sessions WHERE token=?').bind(token).run();
    return null;
  }
  await env.DB.prepare('UPDATE users SET last_seen=? WHERE id=?').bind(Date.now(), row.id).run();
  return { id:row.id, email:row.email, createdAt:Number(row.created_at), banned:!!row.banned };
}
async function setSession(env, userId) {
  const token = randomToken(32), expires = Date.now() + SESSION_DAYS * 864e5;
  await env.DB.prepare('INSERT INTO sessions(token,user_id,expires) VALUES(?,?,?)').bind(token, userId, expires).run();
  return { token, expires };
}
async function clearSession(request, env) {
  const token = parseCookies(request).dz_session;
  if (token) await env.DB.prepare('DELETE FROM sessions WHERE token=?').bind(token).run();
}
async function logEvent(env, userId, type, data = {}) {
  await env.DB.prepare('INSERT INTO events(user_id,type,data,created_at) VALUES(?,?,?,?)')
    .bind(userId || null, String(type || '').slice(0,80), JSON.stringify(data ?? {}), Date.now()).run();
}
async function adminAuthed(request, env) {
  if (!env.ADMIN_PASSWORD) return false;
  const token = parseCookies(request).dz_admin; if (!token) return false;
  const row = await env.DB.prepare('SELECT expires FROM admin_sessions WHERE token=?').bind(token).first();
  if (!row || Number(row.expires) < Date.now()) {
    if (row) await env.DB.prepare('DELETE FROM admin_sessions WHERE token=?').bind(token).run();
    return false;
  }
  return true;
}
async function adminPasswordOk(value, env) {
  if (!env.ADMIN_PASSWORD) return false;
  return timingSafeEqualBytes(await sha256Bytes(value), await sha256Bytes(env.ADMIN_PASSWORD));
}
async function requireAdmin(request, env) {
  if (!env.ADMIN_PASSWORD) return { ok:false, response:json({error:'Admin dashboard is not configured. Set ADMIN_PASSWORD as a Worker secret.'},503) };
  if (!(await adminAuthed(request, env))) return { ok:false, response:json({error:'Admin login required.'},401) };
  return { ok:true };
}
function originFor(request) { const u = new URL(request.url); return `${u.protocol}//${u.host}`; }

async function stripeRequest(env, endpoint, fields) {
  const rsp = await fetch(`https://api.stripe.com/v1/${endpoint}`, {
    method:'POST', headers:{ authorization:`Bearer ${env.STRIPE_SECRET_KEY}`, 'content-type':'application/x-www-form-urlencoded' }, body:new URLSearchParams(fields)
  });
  const out = await rsp.json().catch(() => ({}));
  if (!rsp.ok) throw new Error(out?.error?.message || `Stripe error ${rsp.status}`);
  return out;
}
function hexToBytes(hex) {
  if (!hex || hex.length % 2) return new Uint8Array();
  const out = new Uint8Array(hex.length / 2); for (let i=0;i<out.length;i++) out[i]=parseInt(hex.slice(i*2,i*2+2),16);
  return out;
}
async function verifyStripeSignature(rawBytes, sigHeader, secret) {
  if (!secret || !sigHeader) return false;
  const pairs = {};
  for (const p of String(sigHeader).split(',')) { const [k,v] = p.split('=',2); if(k&&v)pairs[k]=v; }
  const ts=Number(pairs.t), sig=pairs.v1; if(!ts||!sig||Math.abs(Date.now()/1000-ts)>300)return false;
  const key=await crypto.subtle.importKey('raw',enc.encode(secret),{name:'HMAC',hash:'SHA-256'},false,['sign']);
  const prefix=enc.encode(`${ts}.`), data=new Uint8Array(prefix.length+rawBytes.byteLength); data.set(prefix);data.set(new Uint8Array(rawBytes),prefix.length);
  const actual=new Uint8Array(await crypto.subtle.sign('HMAC',key,data));
  return timingSafeEqualBytes(actual,hexToBytes(sig));
}
async function insertPurchase(env,{userId,productId,amount=0,currency='gbp',externalId=null,subscriptionId=null}) {
  if(!userId||!PRODUCTS[productId])return;
  await env.DB.prepare(`INSERT OR IGNORE INTO purchases(user_id,product_id,amount_pence,currency,external_id,stripe_subscription_id,status,claimed,created_at)
    VALUES(?,?,?,?,?,?, 'paid',0,?)`).bind(userId,productId,amount,currency,externalId,subscriptionId,Date.now()).run();
}

function coopStub(env) { return env.COOP.get(env.COOP.idFromName('global-coop-hub')); }
async function coopStats(env) {
  try {
    const r = await coopStub(env).fetch('https://coop.internal/stats');
    if (!r.ok) return {playersOnline:0,activeSquads:0};
    return await r.json();
  } catch { return {playersOnline:0,activeSquads:0}; }
}

async function api(request, env) {
  const url = new URL(request.url), p = url.pathname;

  if (p === '/api/stripe/webhook' && request.method === 'POST') {
    const raw = await request.arrayBuffer();
    if (!(await verifyStripeSignature(raw, request.headers.get('stripe-signature'), env.STRIPE_WEBHOOK_SECRET))) return json({error:'Invalid Stripe signature.'},400);
    const evt=safeParse(dec.decode(raw),{}), obj=evt?.data?.object||{};
    if(evt.type==='checkout.session.completed' && obj.payment_status==='paid'){
      const uid=String(obj.metadata?.user_id||''), pid=String(obj.metadata?.product_id||'');
      await insertPurchase(env,{userId:uid,productId:pid,amount:Number(obj.amount_total)||PRODUCTS[pid]?.amount||0,currency:obj.currency||'gbp',externalId:String(obj.id||evt.id),subscriptionId:obj.subscription?String(obj.subscription):null});
      if(obj.subscription&&uid&&PRODUCTS[pid]) await env.DB.prepare('INSERT OR REPLACE INTO subscriptions(stripe_subscription_id,user_id,product_id,created_at) VALUES(?,?,?,?)').bind(String(obj.subscription),uid,pid,Date.now()).run();
      await logEvent(env,uid,'purchase_completed',{product:pid,amount:Number(obj.amount_total)||0});
    }
    if(evt.type==='invoice.paid' && obj.billing_reason==='subscription_cycle' && obj.subscription){
      const sub=await env.DB.prepare('SELECT user_id,product_id FROM subscriptions WHERE stripe_subscription_id=?').bind(String(obj.subscription)).first();
      if(sub){await insertPurchase(env,{userId:sub.user_id,productId:sub.product_id,amount:Number(obj.amount_paid)||0,currency:obj.currency||'gbp',externalId:String(obj.id||evt.id),subscriptionId:String(obj.subscription)});await logEvent(env,sub.user_id,'subscription_renewed',{product:sub.product_id});}
    }
    return json({received:true});
  }

  if (p === '/api/register' && request.method === 'POST') {
    const b=await body(request),email=normalEmail(b.email),password=String(b.password||'');
    if(!validEmail(email)||email.length>254)return json({error:'Enter a valid email address.'},400);
    if(password.length<8||password.length>128)return json({error:'Password must be at least 8 characters.'},400);
    if(await env.DB.prepare('SELECT id FROM users WHERE email=?').bind(email).first())return json({error:'That email is already registered.'},409);
    const {salt,hash}=await hashPassword(password), id=randomId(), now=Date.now();
    await env.DB.prepare('INSERT INTO users(id,email,salt,hash,created_at,last_seen,banned) VALUES(?,?,?,?,?,?,0)').bind(id,email,salt,hash,now,now).run();
    const s=await setSession(env,id);await logEvent(env,id,'account_registered',{});
    return json({id,email},201,{'set-cookie':cookie('dz_session',s.token,SESSION_DAYS*86400)});
  }
  if (p === '/api/login' && request.method === 'POST') {
    const b=await body(request),email=normalEmail(b.email),user=await env.DB.prepare('SELECT * FROM users WHERE email=?').bind(email).first();
    if(!user||Number(user.banned)||!(await verifyPassword(String(b.password||''),user)))return json({error:'Email or password is incorrect.'},401);
    const s=await setSession(env,user.id);await env.DB.prepare('UPDATE users SET last_seen=? WHERE id=?').bind(Date.now(),user.id).run();await logEvent(env,user.id,'login',{});
    return json({id:user.id,email:user.email},200,{'set-cookie':cookie('dz_session',s.token,SESSION_DAYS*86400)});
  }
  if (p === '/api/logout' && request.method === 'POST') { await clearSession(request,env); return json({ok:true},200,{'set-cookie':cookie('dz_session','',0)}); }
  if (p === '/api/me' && request.method === 'GET') { const u=await authUser(request,env);return u?json({id:u.id,email:u.email}):json({error:'Authentication required.'},401); }
  if (p === '/api/profile' && request.method === 'GET') { const u=await authUser(request,env);if(!u)return json({error:'Authentication required.'},401);const r=await env.DB.prepare('SELECT json FROM profiles WHERE user_id=?').bind(u.id).first();return json({json:r?.json||null}); }
  if (p === '/api/profile' && request.method === 'POST') {
    const u=await authUser(request,env);if(!u)return json({error:'Authentication required.'},401);const b=await body(request);let profile=b.json;if(typeof profile!=='string')profile=JSON.stringify(profile);if(profile.length>1_500_000)return json({error:'Profile too large.'},413);JSON.parse(profile);
    await env.DB.prepare(`INSERT INTO profiles(user_id,json,updated_at) VALUES(?,?,?) ON CONFLICT(user_id) DO UPDATE SET json=excluded.json,updated_at=excluded.updated_at`).bind(u.id,profile,Date.now()).run();return json({ok:true});
  }
  if (p === '/api/event' && request.method === 'POST') { const u=await authUser(request,env);if(!u)return json({error:'Authentication required.'},401);const b=await body(request);await logEvent(env,u.id,b.type,b.data);return json({ok:true},202); }
  if (p === '/api/store/catalog' && request.method === 'GET') return json({paymentEnabled:!!env.STRIPE_SECRET_KEY,products:Object.values(PRODUCTS).map(x=>({id:x.id,name:x.name,price:x.amount/100,type:x.type}))});
  if (p === '/api/checkout' && request.method === 'POST') {
    const u=await authUser(request,env);if(!u)return json({error:'Authentication required.'},401);if(!env.STRIPE_SECRET_KEY)return json({error:'Payments are not configured on this server yet.'},503);
    const b=await body(request),prod=PRODUCTS[String(b.product||'')];if(!prod)return json({error:'Unknown product.'},400);const origin=originFor(request);
    const fields={mode:prod.type==='subscription'?'subscription':'payment','line_items[0][quantity]':'1','line_items[0][price_data][currency]':'gbp','line_items[0][price_data][product_data][name]':prod.name,'line_items[0][price_data][unit_amount]':String(prod.amount),'metadata[user_id]':u.id,'metadata[product_id]':prod.id,success_url:`${origin}/?purchase=success&session_id={CHECKOUT_SESSION_ID}`,cancel_url:`${origin}/?purchase=cancelled`,customer_email:u.email};
    if(prod.type==='subscription')fields['line_items[0][price_data][recurring][interval]']='month';
    const session=await stripeRequest(env,'checkout/sessions',fields);await logEvent(env,u.id,'purchase_started',{product:prod.id,amount:prod.amount});return json({url:session.url});
  }
  if (p === '/api/purchases/pending' && request.method === 'GET') { const u=await authUser(request,env);if(!u)return json({error:'Authentication required.'},401);const q=await env.DB.prepare("SELECT id,product_id FROM purchases WHERE user_id=? AND claimed=0 AND status='paid' ORDER BY id").bind(u.id).all();return json({purchases:(q.results||[]).map(r=>({id:r.id,productId:r.product_id}))}); }
  if (p === '/api/purchases/ack' && request.method === 'POST') { const u=await authUser(request,env);if(!u)return json({error:'Authentication required.'},401);const b=await body(request),ids=Array.isArray(b.ids)?b.ids.map(Number).filter(Number.isFinite).slice(0,100):[];for(const id of ids)await env.DB.prepare('UPDATE purchases SET claimed=1 WHERE id=? AND user_id=?').bind(id,u.id).run();return json({ok:true}); }

  if (p === '/api/admin/login' && request.method === 'POST') {
    if(!env.ADMIN_PASSWORD)return json({error:'Set ADMIN_PASSWORD as a Worker secret first.'},503);const b=await body(request);if(!(await adminPasswordOk(b.password,env)))return json({error:'Incorrect admin password.'},401);
    const token=randomToken(32);await env.DB.prepare('INSERT INTO admin_sessions(token,expires) VALUES(?,?)').bind(token,Date.now()+ADMIN_SESSION_HOURS*3600e3).run();return json({ok:true},200,{'set-cookie':cookie('dz_admin',token,ADMIN_SESSION_HOURS*3600)});
  }
  if (p === '/api/admin/logout' && request.method === 'POST') { const token=parseCookies(request).dz_admin;if(token)await env.DB.prepare('DELETE FROM admin_sessions WHERE token=?').bind(token).run();return json({ok:true},200,{'set-cookie':cookie('dz_admin','',0)}); }
  if (p === '/api/admin/me' && request.method === 'GET') return (await adminAuthed(request,env))?json({ok:true}):json({error:env.ADMIN_PASSWORD?'Admin login required.':'Admin not configured.'},401);
  if (p === '/api/admin/overview' && request.method === 'GET') {
    const ok=await requireAdmin(request,env);if(!ok.ok)return ok.response;const now=Date.now(),day=now-864e5;
    const [account,purchases,dau,recentQ,purchasesQ,profilesQ,cs]=await Promise.all([
      env.DB.prepare('SELECT COUNT(*) n FROM users').first(),
      env.DB.prepare("SELECT COUNT(*) n,COALESCE(SUM(amount_pence),0) revenue FROM purchases WHERE status='paid'").first(),
      env.DB.prepare('SELECT COUNT(DISTINCT user_id) n FROM events WHERE created_at>=? AND user_id IS NOT NULL').bind(day).first(),
      env.DB.prepare('SELECT id,email,created_at,last_seen,banned FROM users ORDER BY created_at DESC LIMIT 8').all(),
      env.DB.prepare(`SELECT p.id,p.product_id,p.amount_pence,p.created_at,u.email FROM purchases p JOIN users u ON u.id=p.user_id ORDER BY p.created_at DESC LIMIT 10`).all(),
      env.DB.prepare('SELECT json FROM profiles').all(),coopStats(env)
    ]);
    const economy={cash:0,credits:0,tokens:0,profiles:0};for(const r of profilesQ.results||[]){const pr=safeParse(r.json,null);if(!pr)continue;economy.profiles++;economy.cash+=Number(pr.cash)||0;economy.credits+=Number(pr.credits)||0;economy.tokens+=Number(pr.tokens)||0;}
    return json({version:VERSION,playersOnline:cs.playersOnline||0,accounts:Number(account?.n)||0,activeSquads:cs.activeSquads||0,revenuePence:Number(purchases?.revenue)||0,purchaseCount:Number(purchases?.n)||0,dau:Number(dau?.n)||0,economy,recent:recentQ.results||[],recentPurchases:purchasesQ.results||[],paymentsEnabled:!!env.STRIPE_SECRET_KEY});
  }
  if (p === '/api/admin/players' && request.method === 'GET') {
    const ok=await requireAdmin(request,env);if(!ok.ok)return ok.response;const q=String(url.searchParams.get('q')||'').trim().toLowerCase(),like=`%${q}%`;
    const rows=q?await env.DB.prepare(`SELECT u.id,u.email,u.created_at,u.last_seen,u.banned,p.json FROM users u LEFT JOIN profiles p ON p.user_id=u.id WHERE lower(u.email) LIKE ? ORDER BY u.last_seen DESC LIMIT 100`).bind(like).all():await env.DB.prepare(`SELECT u.id,u.email,u.created_at,u.last_seen,u.banned,p.json FROM users u LEFT JOIN profiles p ON p.user_id=u.id ORDER BY u.last_seen DESC LIMIT 100`).all();
    const players=(rows.results||[]).map(r=>{const pr=safeParse(r.json,null)||{};return{id:r.id,email:r.email,createdAt:r.created_at,lastSeen:r.last_seen,banned:!!r.banned,name:pr.name||'Uncreated',level:Number(pr.level)||1,cash:Number(pr.cash)||0,credits:Number(pr.credits)||0,tokens:Number(pr.tokens)||0,kills:Number(pr.stats?.zkills||pr.totalKills)||0,extractions:Number(pr.stats?.extractions||pr.extractions)||0}});return json({players});
  }
  const grantMatch=p.match(/^\/api\/admin\/player\/([^/]+)\/grant$/);
  if(grantMatch&&request.method==='POST'){
    const ok=await requireAdmin(request,env);if(!ok.ok)return ok.response;const uid=decodeURIComponent(grantMatch[1]),row=await env.DB.prepare('SELECT json FROM profiles WHERE user_id=?').bind(uid).first();if(!row)return json({error:'Player profile not found.'},404);const pr=safeParse(row.json,null);if(!pr)return json({error:'Profile data is invalid.'},400);const b=await body(request);for(const k of ['cash','credits','tokens']){const n=Math.trunc(Number(b[k])||0);if(n)pr[k]=Math.max(0,(Number(pr[k])||0)+clamp(n,-1_000_000,1_000_000));}await env.DB.prepare('UPDATE profiles SET json=?,updated_at=? WHERE user_id=?').bind(JSON.stringify(pr),Date.now(),uid).run();await logEvent(env,uid,'admin_grant',{cash:b.cash||0,credits:b.credits||0,tokens:b.tokens||0});return json({ok:true});
  }
  const banMatch=p.match(/^\/api\/admin\/player\/([^/]+)\/ban$/);
  if(banMatch&&request.method==='POST'){
    const ok=await requireAdmin(request,env);if(!ok.ok)return ok.response;const uid=decodeURIComponent(banMatch[1]),b=await body(request),ban=b.banned?1:0;const r=await env.DB.prepare('UPDATE users SET banned=? WHERE id=?').bind(ban,uid).run();if(!r.meta?.changes)return json({error:'Player not found.'},404);if(ban)await env.DB.prepare('DELETE FROM sessions WHERE user_id=?').bind(uid).run();await logEvent(env,uid,ban?'admin_ban':'admin_unban',{});return json({ok:true});
  }
  if (p === '/api/health') { const s=await coopStats(env);return json({ok:true,version:VERSION,rooms:s.activeSquads||0,playersOnline:s.playersOnline||0,paymentEnabled:!!env.STRIPE_SECRET_KEY,database:'d1',backend:'cloudflare-workers'}); }
  return json({error:'Not found'},404);
}

async function serveAsset(request, env) {
  const url=new URL(request.url);
  if(url.pathname==='/admin')url.pathname='/admin.html';
  const assetRequest=new Request(url.toString(),request);
  return env.ASSETS.fetch(assetRequest);
}

export default {
  async fetch(request, env) {
    try {
      const url=new URL(request.url);
      if(url.pathname==='/ws'){
        if((request.headers.get('upgrade')||'').toLowerCase()!=='websocket')return json({error:'WebSocket upgrade required.'},426);
        const user=await authUser(request,env);if(!user)return json({error:'Authentication required.'},401);
        const h=new Headers(request.headers);h.set('x-dz-user-id',user.id);h.set('x-dz-user-email',user.email);
        return coopStub(env).fetch(new Request('https://coop.internal/connect',{method:'GET',headers:h}));
      }
      if(url.pathname.startsWith('/api/')) return await api(request,env);
      return await serveAsset(request,env);
    } catch (err) {
      console.error('worker error',err?.stack||err);
      return json({error:err?.message==='body too large'?'Request too large.':'Server error.'},500);
    }
  }
};

function wsOpen(ws){ return ws && ws.readyState === 1; }
function send(ws,msg){ if(!wsOpen(ws))return; try{ws.send(JSON.stringify(msg));}catch{} }
function wsAtt(ws){ try{return ws.deserializeAttachment()||{};}catch{return{};} }
function saveAtt(ws,a){ try{ws.serializeAttachment(a);}catch{} }
function randomInt(max){const b=new Uint32Array(1);crypto.getRandomValues(b);return b[0]%max;}
function weatherPick(){const w=['clear','overcast','rain','fog'];return w[randomInt(w.length)];}
function memberView(a,room){return{id:a.pid,name:a.name||'Survivor',level:a.level||1,ready:!!a.ready,leader:a.pid===room.leaderPid};}

export class CoopHub {
  constructor(ctx, env){ this.ctx=ctx;this.env=env; }

  sockets(){ return this.ctx.getWebSockets(); }
  activeMembers(code){ return this.sockets().map(ws=>({ws,a:wsAtt(ws)})).filter(x=>x.a.room===code); }
  byPid(pid){ return this.sockets().map(ws=>({ws,a:wsAtt(ws)})).find(x=>Number(x.a.pid)===Number(pid))||null; }
  byUser(userId){ return this.sockets().map(ws=>({ws,a:wsAtt(ws)})).find(x=>x.a.userId===userId)||null; }

  async nextPid(){
    let n=Number(await this.ctx.storage.get('nextPid'))||100;await this.ctx.storage.put('nextPid',n+1);return n;
  }
  async room(code){ return await this.ctx.storage.get(`room:${code}`) || null; }
  async saveRoom(r){ await this.ctx.storage.put(`room:${r.code}`,r); }
  async deleteRoom(code){ await this.ctx.storage.delete(`room:${code}`); }
  async reconnects(){ const m=await this.ctx.storage.list({prefix:'reconnect:'});return [...m.values()]; }
  async members(code){
    const active=this.activeMembers(code).map(x=>x.a), seen=new Set(active.map(a=>a.userId));
    const rec=(await this.reconnects()).filter(a=>a.room===code&&a.expires>Date.now()&&!seen.has(a.userId));
    return [...active,...rec];
  }
  async roomCode(){
    const chars='ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    for(let tries=0;tries<50;tries++){
      let c='';for(let i=0;i<4;i++)c+=chars[randomInt(chars.length)];if(!(await this.room(c)))return c;
    }
    return randomToken(4).slice(0,4).toUpperCase();
  }
  async broadcastSquad(room){
    const members=(await this.members(room.code)).map(a=>memberView(a,room));
    for(const x of this.activeMembers(room.code))send(x.ws,{t:'squad',code:room.code,members});
  }
  async closeRoom(code,msg='Squad leader left. Room closed.'){
    for(const x of this.activeMembers(code)){x.a.room=null;x.a.ready=false;x.a.raid=false;saveAtt(x.ws,x.a);send(x.ws,{t:'error',msg});}
    const rec=await this.ctx.storage.list({prefix:'reconnect:'});const dels=[];for(const [k,a] of rec)if(a.room===code)dels.push(k);if(dels.length)await this.ctx.storage.delete(dels);
    await this.deleteRoom(code);
  }
  async leaveAttachment(a, notify=true){
    if(!a?.room)return;const code=a.room,room=await this.room(code);a.room=null;a.ready=false;a.raid=false;
    const activeSelf=this.byPid(a.pid);if(activeSelf)saveAtt(activeSelf.ws,a);
    if(!room)return;
    if(notify&&room.raid&&room.leaderPid!==a.pid){const host=this.byPid(room.leaderPid);if(host)send(host.ws,{t:'peer.leave',pid:a.pid});}
    const remain=(await this.members(code)).filter(x=>x.pid!==a.pid);
    if(!remain.length||room.leaderPid===a.pid){await this.closeRoom(code);return;}
    await this.broadcastSquad(room);
  }
  async scheduleReconnectAlarm(){
    const rec=await this.reconnects(), next=rec.filter(x=>x.expires>Date.now()).sort((a,b)=>a.expires-b.expires)[0];
    if(next)await this.ctx.storage.setAlarm(next.expires+50);
  }

  async fetch(request){
    const url=new URL(request.url);
    if(url.pathname==='/stats'){
      const roomRows=await this.ctx.storage.list({prefix:'room:'});return json({playersOnline:this.sockets().length,activeSquads:roomRows.size});
    }
    if((request.headers.get('upgrade')||'').toLowerCase()!=='websocket')return json({error:'WebSocket upgrade required.'},426);
    const userId=request.headers.get('x-dz-user-id'),email=request.headers.get('x-dz-user-email')||'';if(!userId)return json({error:'Missing user identity.'},401);
    const existing=this.byUser(userId);if(existing){try{existing.ws.close(1000,'reconnected elsewhere');}catch{}}
    const [client,server]=Object.values(new WebSocketPair());
    this.ctx.acceptWebSocket(server);
    let a=await this.ctx.storage.get(`reconnect:${userId}`);
    if(a&&a.expires>Date.now()){await this.ctx.storage.delete(`reconnect:${userId}`);a={...a,email,expires:0};}
    else {if(a)await this.ctx.storage.delete(`reconnect:${userId}`);a={userId,email,pid:await this.nextPid(),room:null,ready:false,name:'Survivor',level:1,look:null,lo:null,status:null,raid:false};}
    saveAtt(server,a);
    return new Response(null,{status:101,webSocket:client});
  }

  async webSocketMessage(ws, raw){
    let m;try{m=JSON.parse(typeof raw==='string'?raw:dec.decode(raw));}catch{return;}if(!m||typeof m.t!=='string')return;
    let a=wsAtt(ws);
    if(m.t==='hello'){
      a.name=String(m.name||'Survivor').slice(0,24);a.level=Math.max(1,Number(m.level)||1);a.look=m.look||null;a.lo=m.lo||null;a.status=m.status||null;saveAtt(ws,a);
      send(ws,{t:'welcome',pid:a.pid,user:{id:a.userId,email:a.email},resumed:!!a.room});const room=a.room?await this.room(a.room):null;if(room)await this.broadcastSquad(room);return;
    }
    if(m.t==='squad.create'){
      await this.leaveAttachment(a,false);const code=await this.roomCode();const room={code,leaderPid:a.pid,raid:false,createdAt:Date.now()};await this.saveRoom(room);a.room=code;a.ready=false;a.raid=false;saveAtt(ws,a);await this.broadcastSquad(room);return;
    }
    if(m.t==='squad.join'){
      const code=String(m.code||'').toUpperCase(),room=await this.room(code);if(!room)return send(ws,{t:'error',msg:'No squad with that code.'});if(room.raid)return send(ws,{t:'error',msg:'That squad is already in a raid.'});if((await this.members(code)).length>=4)return send(ws,{t:'error',msg:'That squad is full.'});
      await this.leaveAttachment(a,false);a.room=code;a.ready=false;a.raid=false;saveAtt(ws,a);await this.broadcastSquad(room);return;
    }
    if(m.t==='squad.ready'){
      const room=a.room?await this.room(a.room):null;if(!room||room.raid)return;a.ready=!!m.ready;saveAtt(ws,a);await this.broadcastSquad(room);return;
    }
    if(m.t==='squad.leave'){await this.leaveAttachment(a,true);saveAtt(ws,a);return;}
    const room=a.room?await this.room(a.room):null;if(!room)return;
    if(m.t==='squad.deploy'){
      if(a.pid!==room.leaderPid)return send(ws,{t:'error',msg:'Only the leader can deploy.'});const members=await this.members(room.code);if(members.length<2)return send(ws,{t:'error',msg:'Invite at least one friend before deploying.'});if(members.some(x=>!x.ready))return send(ws,{t:'error',msg:'Everyone must be Ready before deployment.'});if(members.some(x=>!x.lo))return send(ws,{t:'error',msg:'A player loadout is still syncing. Try again.'});
      room.raid=true;await this.saveRoom(room);for(const x of this.activeMembers(room.code)){x.a.raid=true;saveAtt(x.ws,x.a);}const payload={t:'raid.start',seed:1+randomInt(0x7ffffffe),hour:Number(m.hour)||10.5,length:1800,weather:weatherPick(),hostPid:room.leaderPid,players:members.map(x=>({id:x.pid,name:x.name,level:x.level,look:x.look,lo:x.lo,status:x.status}))};for(const x of this.activeMembers(room.code))send(x.ws,payload);return;
    }
    if(!room.raid)return;
    if(m.t==='raid.done'&&a.pid===room.leaderPid){room.raid=false;await this.saveRoom(room);for(const x of this.activeMembers(room.code)){x.a.ready=false;x.a.raid=false;saveAtt(x.ws,x.a);}await this.broadcastSquad(room);return;}
    const host=this.byPid(room.leaderPid);if(!host)return;
    if(m.t==='in'&&a.pid!==room.leaderPid){send(host.ws,{t:'peer.in',pid:a.pid,i:m.i});return;}
    if(m.t==='cmd'&&a.pid!==room.leaderPid){send(host.ws,{t:'peer.cmd',pid:a.pid,c:m.c});return;}
    if(m.t==='host.snap'&&a.pid===room.leaderPid){const states=new Map(Array.isArray(m.states)?m.states:[]);for(const x of this.activeMembers(room.code)){if(x.a.pid===room.leaderPid)continue;send(x.ws,{t:'snap',...m.snap,me:states.get(x.a.pid)||null});}return;}
    if(m.t==='host.end'&&a.pid===room.leaderPid){const target=this.byPid(Number(m.pid));if(target&&target.a.room===room.code)send(target.ws,{t:'raid.end',result:m.result});return;}
  }

  async webSocketClose(ws){
    const a=wsAtt(ws);if(!a?.userId)return;
    if(a.room){const room=await this.room(a.room);if(room?.raid&&room.leaderPid!==a.pid){const host=this.byPid(room.leaderPid);if(host)send(host.ws,{t:'peer.pause',pid:a.pid});}
      a.expires=Date.now()+RECONNECT_GRACE_MS;await this.ctx.storage.put(`reconnect:${a.userId}`,a);await this.scheduleReconnectAlarm();}
  }
  async webSocketError(ws){ await this.webSocketClose(ws); }
  async alarm(){
    const now=Date.now(), rec=await this.ctx.storage.list({prefix:'reconnect:'}), expired=[];
    for(const [k,a] of rec){if(Number(a.expires)<=now){expired.push(k);await this.leaveAttachment(a,true);}}
    if(expired.length)await this.ctx.storage.delete(expired);await this.scheduleReconnectAlarm();
  }
}

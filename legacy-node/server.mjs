import http from 'node:http';
import { readFile, mkdir, stat, access } from 'node:fs/promises';
import { existsSync, createReadStream } from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { EventEmitter } from 'node:events';
import { DatabaseSync } from 'node:sqlite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, 'data');
const SQLITE_FILE = path.join(DATA_DIR, 'deadzone.sqlite');
const LEGACY_DB_FILE = path.join(DATA_DIR, 'db.json');
const PORT = Number(process.env.PORT || 3000);
const SESSION_DAYS = 30;
const ADMIN_SESSION_HOURS = 12;
const MAX_BODY = 2 * 1024 * 1024;
const VERSION='0.5.10';
const ADMIN_PASSWORD = String(process.env.ADMIN_PASSWORD || '');
const STRIPE_SECRET_KEY = String(process.env.STRIPE_SECRET_KEY || '');
const STRIPE_WEBHOOK_SECRET = String(process.env.STRIPE_WEBHOOK_SECRET || '');

await mkdir(DATA_DIR, { recursive: true });
const sql = new DatabaseSync(SQLITE_FILE);
sql.exec(`
  PRAGMA journal_mode = WAL;
  PRAGMA foreign_keys = ON;
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    salt TEXT NOT NULL,
    hash TEXT NOT NULL,
    created_at INTEGER NOT NULL,
    last_seen INTEGER NOT NULL,
    banned INTEGER NOT NULL DEFAULT 0
  );
  CREATE TABLE IF NOT EXISTS sessions (
    token TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    expires INTEGER NOT NULL
  );
  CREATE TABLE IF NOT EXISTS profiles (
    user_id TEXT PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    json TEXT NOT NULL,
    updated_at INTEGER NOT NULL
  );
  CREATE TABLE IF NOT EXISTS events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT REFERENCES users(id) ON DELETE SET NULL,
    type TEXT NOT NULL,
    data TEXT NOT NULL DEFAULT '{}',
    created_at INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_events_created ON events(created_at);
  CREATE INDEX IF NOT EXISTS idx_events_type ON events(type);
  CREATE TABLE IF NOT EXISTS purchases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    product_id TEXT NOT NULL,
    amount_pence INTEGER NOT NULL DEFAULT 0,
    currency TEXT NOT NULL DEFAULT 'gbp',
    external_id TEXT UNIQUE,
    stripe_subscription_id TEXT,
    status TEXT NOT NULL DEFAULT 'paid',
    claimed INTEGER NOT NULL DEFAULT 0,
    created_at INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_purchases_user ON purchases(user_id, claimed);
  CREATE TABLE IF NOT EXISTS subscriptions (
    stripe_subscription_id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    product_id TEXT NOT NULL,
    created_at INTEGER NOT NULL
  );
  CREATE TABLE IF NOT EXISTS admin_sessions (
    token TEXT PRIMARY KEY,
    expires INTEGER NOT NULL
  );
`);

// One-time migration from the old JSON account/profile store.
try {
  const n = sql.prepare('SELECT COUNT(*) AS n FROM users').get().n;
  if (!n && existsSync(LEGACY_DB_FILE)) {
    const legacy = JSON.parse(await readFile(LEGACY_DB_FILE, 'utf8'));
    const insUser = sql.prepare('INSERT OR IGNORE INTO users(id,email,salt,hash,created_at,last_seen,banned) VALUES(?,?,?,?,?,?,0)');
    const insProfile = sql.prepare('INSERT OR REPLACE INTO profiles(user_id,json,updated_at) VALUES(?,?,?)');
    const insSession = sql.prepare('INSERT OR IGNORE INTO sessions(token,user_id,expires) VALUES(?,?,?)');
    sql.exec('BEGIN');
    try {
      for (const [email, u] of Object.entries(legacy.users || {})) {
        if (!u?.id || !u?.salt || !u?.hash) continue;
        insUser.run(u.id, email, u.salt, u.hash, Number(u.createdAt) || Date.now(), Date.now());
      }
      for (const [uid, profile] of Object.entries(legacy.profiles || {})) {
        insProfile.run(uid, typeof profile === 'string' ? profile : JSON.stringify(profile), Date.now());
      }
      for (const [token, s] of Object.entries(legacy.sessions || {})) {
        const user = sql.prepare('SELECT id FROM users WHERE email=?').get(s?.email || '');
        if (user && Number(s?.expires) > Date.now()) insSession.run(token, user.id, Number(s.expires));
      }
      sql.exec('COMMIT');
      console.log('Migrated legacy data/db.json into SQLite.');
    } catch (e) { sql.exec('ROLLBACK'); throw e; }
  }
} catch (e) { console.warn('Legacy migration skipped:', e.message); }

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

function json(res, status, body, headers = {}) {
  const data = Buffer.from(JSON.stringify(body));
  res.writeHead(status, { 'content-type':'application/json; charset=utf-8', 'content-length':data.length, 'cache-control':'no-store', ...headers });
  res.end(data);
}
function parseCookies(req) {
  const out = {};
  for (const part of String(req.headers.cookie || '').split(';')) {
    const i = part.indexOf('='); if (i < 0) continue;
    out[part.slice(0, i).trim()] = decodeURIComponent(part.slice(i + 1).trim());
  }
  return out;
}
function cookieSecure() { return process.env.NODE_ENV === 'production' ? '; Secure' : ''; }
function setCookie(res, name, value, maxAge, httpOnly = true) {
  const attrs = `${httpOnly ? '; HttpOnly' : ''}; SameSite=Lax; Path=/; Max-Age=${maxAge}${cookieSecure()}`;
  res.setHeader('set-cookie', `${name}=${encodeURIComponent(value)}${attrs}`);
}
function clearCookie(res, name) { setCookie(res, name, '', 0); }
function authUser(req) {
  const token = parseCookies(req).dz_session;
  if (!token) return null;
  const row = sql.prepare(`SELECT u.id,u.email,u.created_at,u.last_seen,u.banned,s.expires FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token=?`).get(token);
  if (!row || row.expires < Date.now()) { if (row) sql.prepare('DELETE FROM sessions WHERE token=?').run(token); return null; }
  if (row.banned) return null;
  sql.prepare('UPDATE users SET last_seen=? WHERE id=?').run(Date.now(), row.id);
  return { id:row.id, email:row.email, createdAt:row.created_at, banned:!!row.banned };
}
function setSession(res, userId) {
  const token = crypto.randomBytes(32).toString('base64url');
  sql.prepare('INSERT INTO sessions(token,user_id,expires) VALUES(?,?,?)').run(token, userId, Date.now() + SESSION_DAYS * 864e5);
  setCookie(res, 'dz_session', token, SESSION_DAYS * 86400);
}
function clearSession(req, res) {
  const token = parseCookies(req).dz_session;
  if (token) sql.prepare('DELETE FROM sessions WHERE token=?').run(token);
  clearCookie(res, 'dz_session');
}
async function rawBody(req) {
  let size=0; const chunks=[];
  for await (const chunk of req) { size += chunk.length; if (size > MAX_BODY) throw new Error('body too large'); chunks.push(chunk); }
  return Buffer.concat(chunks);
}
async function body(req) {
  const raw = await rawBody(req); if (!raw.length) return {};
  return JSON.parse(raw.toString('utf8'));
}
function hashPassword(password, salt = crypto.randomBytes(16).toString('hex')) {
  const hash = crypto.scryptSync(password, salt, 64).toString('hex'); return { salt, hash };
}
function verifyPassword(password, user) {
  const actual=crypto.scryptSync(password,user.salt,64), expected=Buffer.from(user.hash,'hex');
  return expected.length===actual.length && crypto.timingSafeEqual(expected,actual);
}
function normalEmail(v){return String(v||'').trim().toLowerCase();}
function validEmail(v){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);}
function safeParse(s, fallback={}) { try { return JSON.parse(s); } catch { return fallback; } }
function originFor(req) {
  const proto = String(req.headers['x-forwarded-proto'] || '').split(',')[0] || (process.env.NODE_ENV==='production'?'https':'http');
  const host = String(req.headers['x-forwarded-host'] || req.headers.host || `localhost:${PORT}`).split(',')[0];
  return `${proto}://${host}`;
}
function logEvent(userId, type, data={}) {
  sql.prepare('INSERT INTO events(user_id,type,data,created_at) VALUES(?,?,?,?)').run(userId || null, String(type).slice(0,80), JSON.stringify(data ?? {}), Date.now());
}

function adminAuthed(req) {
  if (!ADMIN_PASSWORD) return false;
  const token=parseCookies(req).dz_admin; if(!token) return false;
  const row=sql.prepare('SELECT expires FROM admin_sessions WHERE token=?').get(token);
  if(!row || row.expires<Date.now()){ if(row)sql.prepare('DELETE FROM admin_sessions WHERE token=?').run(token); return false; }
  return true;
}
function adminPasswordOk(v) {
  if (!ADMIN_PASSWORD) return false;
  const a=crypto.createHash('sha256').update(String(v)).digest(), b=crypto.createHash('sha256').update(ADMIN_PASSWORD).digest();
  return crypto.timingSafeEqual(a,b);
}
function requireAdmin(req,res){ if(!ADMIN_PASSWORD){json(res,503,{error:'Admin dashboard is not configured. Set ADMIN_PASSWORD on the server.'});return false;} if(!adminAuthed(req)){json(res,401,{error:'Admin login required.'});return false;} return true; }

async function stripeRequest(endpoint, fields) {
  const rsp=await fetch(`https://api.stripe.com/v1/${endpoint}`, {method:'POST',headers:{authorization:`Bearer ${STRIPE_SECRET_KEY}`,'content-type':'application/x-www-form-urlencoded'},body:new URLSearchParams(fields)});
  const out=await rsp.json().catch(()=>({})); if(!rsp.ok) throw new Error(out?.error?.message || `Stripe error ${rsp.status}`); return out;
}
function verifyStripeSignature(raw, sigHeader) {
  if(!STRIPE_WEBHOOK_SECRET || !sigHeader) return false;
  const parts=Object.fromEntries(String(sigHeader).split(',').map(x=>x.split('=',2)));
  const ts=Number(parts.t), sig=parts.v1; if(!ts || !sig || Math.abs(Date.now()/1000-ts)>300) return false;
  const expected=crypto.createHmac('sha256',STRIPE_WEBHOOK_SECRET).update(`${ts}.`).update(raw).digest('hex');
  const a=Buffer.from(sig,'hex'), b=Buffer.from(expected,'hex'); return a.length===b.length && crypto.timingSafeEqual(a,b);
}
function insertPurchase({userId,productId,amount=0,currency='gbp',externalId=null,subscriptionId=null}) {
  if(!userId || !PRODUCTS[productId]) return;
  try { sql.prepare(`INSERT INTO purchases(user_id,product_id,amount_pence,currency,external_id,stripe_subscription_id,status,claimed,created_at) VALUES(?,?,?,?,?,?, 'paid',0,?)`).run(userId,productId,amount,currency,externalId,subscriptionId,Date.now()); }
  catch(e){ if(!String(e.message).includes('UNIQUE')) throw e; }
}

const MIME={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json; charset=utf-8','.webmanifest':'application/manifest+json; charset=utf-8','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.txt':'text/plain; charset=utf-8'};
const blocked=new Set(['server.mjs','package.json','package-lock.json','README.md','CHECKSUMS.txt','RELEASE_NOTES.md']);
async function serveStatic(req,res,pathname){
  let rel=pathname==='/'?'index.html':pathname==='/admin'?'admin.html':pathname.replace(/^\/+/, '');
  if(rel.startsWith('data/')||rel.startsWith('.')||blocked.has(rel)||rel.includes('..'))return json(res,404,{error:'Not found'});
  const file=path.join(ROOT,rel);
  try{const st=await stat(file);if(!st.isFile())throw new Error();res.writeHead(200,{'content-type':MIME[path.extname(file)]||'application/octet-stream','content-length':st.size,'cache-control':/^(game\.js|index\.html|admin\.html|manifest\.webmanifest|sw\.js|polish\.css)$/.test(rel)?'no-cache':'public, max-age=86400','x-content-type-options':'nosniff','referrer-policy':'same-origin','x-frame-options':'SAMEORIGIN'});createReadStream(file).pipe(res);}catch{json(res,404,{error:'Not found'});}
}

// rooms / clients are declared below but are read lazily by /api/health and admin routes after startup.
const server=http.createServer(async(req,res)=>{
  const url=new URL(req.url,`http://${req.headers.host||'localhost'}`);
  try{
    if(url.pathname==='/api/stripe/webhook'&&req.method==='POST'){
      const raw=await rawBody(req);
      if(!verifyStripeSignature(raw,req.headers['stripe-signature'])) return json(res,400,{error:'Invalid Stripe signature.'});
      const evt=JSON.parse(raw.toString('utf8')); const obj=evt?.data?.object||{};
      if(evt.type==='checkout.session.completed' && obj.payment_status==='paid'){
        const uid=String(obj.metadata?.user_id||''), pid=String(obj.metadata?.product_id||'');
        insertPurchase({userId:uid,productId:pid,amount:Number(obj.amount_total)||PRODUCTS[pid]?.amount||0,currency:obj.currency||'gbp',externalId:String(obj.id||evt.id),subscriptionId:obj.subscription?String(obj.subscription):null});
        if(obj.subscription && uid && PRODUCTS[pid]) sql.prepare('INSERT OR REPLACE INTO subscriptions(stripe_subscription_id,user_id,product_id,created_at) VALUES(?,?,?,?)').run(String(obj.subscription),uid,pid,Date.now());
        logEvent(uid,'purchase_completed',{product:pid,amount:Number(obj.amount_total)||0});
      }
      if(evt.type==='invoice.paid' && obj.billing_reason==='subscription_cycle' && obj.subscription){
        const sub=sql.prepare('SELECT user_id,product_id FROM subscriptions WHERE stripe_subscription_id=?').get(String(obj.subscription));
        if(sub){ insertPurchase({userId:sub.user_id,productId:sub.product_id,amount:Number(obj.amount_paid)||0,currency:obj.currency||'gbp',externalId:String(obj.id||evt.id),subscriptionId:String(obj.subscription)}); logEvent(sub.user_id,'subscription_renewed',{product:sub.product_id}); }
      }
      return json(res,200,{received:true});
    }

    if(url.pathname==='/api/register'&&req.method==='POST'){
      const b=await body(req),email=normalEmail(b.email),password=String(b.password||'');
      if(!validEmail(email)||email.length>254)return json(res,400,{error:'Enter a valid email address.'});
      if(password.length<8||password.length>128)return json(res,400,{error:'Password must be at least 8 characters.'});
      if(sql.prepare('SELECT id FROM users WHERE email=?').get(email))return json(res,409,{error:'That email is already registered.'});
      const {salt,hash}=hashPassword(password),id=crypto.randomUUID(),now=Date.now();
      sql.prepare('INSERT INTO users(id,email,salt,hash,created_at,last_seen,banned) VALUES(?,?,?,?,?,?,0)').run(id,email,salt,hash,now,now);
      setSession(res,id); logEvent(id,'account_registered',{}); return json(res,201,{id,email});
    }
    if(url.pathname==='/api/login'&&req.method==='POST'){
      const b=await body(req),email=normalEmail(b.email); const user=sql.prepare('SELECT * FROM users WHERE email=?').get(email);
      if(!user||user.banned||!verifyPassword(String(b.password||''),user))return json(res,401,{error:'Email or password is incorrect.'});
      setSession(res,user.id);sql.prepare('UPDATE users SET last_seen=? WHERE id=?').run(Date.now(),user.id);logEvent(user.id,'login',{});return json(res,200,{id:user.id,email:user.email});
    }
    if(url.pathname==='/api/logout'&&req.method==='POST'){clearSession(req,res);return json(res,200,{ok:true});}
    if(url.pathname==='/api/me'&&req.method==='GET'){const user=authUser(req);if(!user)return json(res,401,{error:'Authentication required.'});return json(res,200,{id:user.id,email:user.email});}
    if(url.pathname==='/api/profile'&&req.method==='GET'){const user=authUser(req);if(!user)return json(res,401,{error:'Authentication required.'});const r=sql.prepare('SELECT json FROM profiles WHERE user_id=?').get(user.id);return json(res,200,{json:r?.json||null});}
    if(url.pathname==='/api/profile'&&req.method==='POST'){
      const user=authUser(req);if(!user)return json(res,401,{error:'Authentication required.'});const b=await body(req);let profile=b.json;if(typeof profile!=='string')profile=JSON.stringify(profile);if(profile.length>1_500_000)return json(res,413,{error:'Profile too large.'});JSON.parse(profile);sql.prepare('INSERT INTO profiles(user_id,json,updated_at) VALUES(?,?,?) ON CONFLICT(user_id) DO UPDATE SET json=excluded.json,updated_at=excluded.updated_at').run(user.id,profile,Date.now());return json(res,200,{ok:true});
    }
    if(url.pathname==='/api/event'&&req.method==='POST'){const user=authUser(req);if(!user)return json(res,401,{error:'Authentication required.'});const b=await body(req);logEvent(user.id,b.type,b.data);return json(res,202,{ok:true});}
    if(url.pathname==='/api/store/catalog'&&req.method==='GET')return json(res,200,{paymentEnabled:!!STRIPE_SECRET_KEY,products:Object.values(PRODUCTS).map(p=>({id:p.id,name:p.name,price:p.amount/100,type:p.type}))});
    if(url.pathname==='/api/checkout'&&req.method==='POST'){
      const user=authUser(req);if(!user)return json(res,401,{error:'Authentication required.'});if(!STRIPE_SECRET_KEY)return json(res,503,{error:'Payments are not configured on this server yet.'});
      const b=await body(req),p=PRODUCTS[String(b.product||'')];if(!p)return json(res,400,{error:'Unknown product.'});const origin=originFor(req);
      const fields={mode:p.type==='subscription'?'subscription':'payment','line_items[0][quantity]':'1','line_items[0][price_data][currency]':'gbp','line_items[0][price_data][product_data][name]':p.name,'line_items[0][price_data][unit_amount]':String(p.amount),'metadata[user_id]':user.id,'metadata[product_id]':p.id,success_url:`${origin}/?purchase=success&session_id={CHECKOUT_SESSION_ID}`,cancel_url:`${origin}/?purchase=cancelled`,customer_email:user.email};
      if(p.type==='subscription')fields['line_items[0][price_data][recurring][interval]']='month';
      const session=await stripeRequest('checkout/sessions',fields);logEvent(user.id,'purchase_started',{product:p.id,amount:p.amount});return json(res,200,{url:session.url});
    }
    if(url.pathname==='/api/purchases/pending'&&req.method==='GET'){const user=authUser(req);if(!user)return json(res,401,{error:'Authentication required.'});const rows=sql.prepare("SELECT id,product_id FROM purchases WHERE user_id=? AND claimed=0 AND status='paid' ORDER BY id").all(user.id);return json(res,200,{purchases:rows.map(r=>({id:r.id,productId:r.product_id}))});}
    if(url.pathname==='/api/purchases/ack'&&req.method==='POST'){const user=authUser(req);if(!user)return json(res,401,{error:'Authentication required.'});const b=await body(req),ids=Array.isArray(b.ids)?b.ids.map(Number).filter(Number.isFinite).slice(0,100):[];const st=sql.prepare('UPDATE purchases SET claimed=1 WHERE id=? AND user_id=?');for(const id of ids)st.run(id,user.id);return json(res,200,{ok:true});}

    if(url.pathname==='/api/admin/login'&&req.method==='POST'){
      if(!ADMIN_PASSWORD)return json(res,503,{error:'Set ADMIN_PASSWORD on the server first.'});const b=await body(req);if(!adminPasswordOk(b.password))return json(res,401,{error:'Incorrect admin password.'});const token=crypto.randomBytes(32).toString('base64url');sql.prepare('INSERT INTO admin_sessions(token,expires) VALUES(?,?)').run(token,Date.now()+ADMIN_SESSION_HOURS*3600e3);setCookie(res,'dz_admin',token,ADMIN_SESSION_HOURS*3600);return json(res,200,{ok:true});
    }
    if(url.pathname==='/api/admin/logout'&&req.method==='POST'){const token=parseCookies(req).dz_admin;if(token)sql.prepare('DELETE FROM admin_sessions WHERE token=?').run(token);clearCookie(res,'dz_admin');return json(res,200,{ok:true});}
    if(url.pathname==='/api/admin/me'&&req.method==='GET')return adminAuthed(req)?json(res,200,{ok:true}):json(res,401,{error:ADMIN_PASSWORD?'Admin login required.':'Admin not configured.'});
    if(url.pathname==='/api/admin/overview'&&req.method==='GET'){
      if(!requireAdmin(req,res))return;const now=Date.now(),day=now-864e5;const accountCount=sql.prepare('SELECT COUNT(*) n FROM users').get().n,purchases=sql.prepare("SELECT COUNT(*) n,COALESCE(SUM(amount_pence),0) revenue FROM purchases WHERE status='paid'").get(),dau=sql.prepare('SELECT COUNT(DISTINCT user_id) n FROM events WHERE created_at>=? AND user_id IS NOT NULL').get(day).n;
      const recent=sql.prepare('SELECT id,email,created_at,last_seen,banned FROM users ORDER BY created_at DESC LIMIT 8').all();const recentPurchases=sql.prepare(`SELECT p.id,p.product_id,p.amount_pence,p.created_at,u.email FROM purchases p JOIN users u ON u.id=p.user_id ORDER BY p.created_at DESC LIMIT 10`).all();
      let economy={cash:0,credits:0,tokens:0,profiles:0};for(const r of sql.prepare('SELECT json FROM profiles').all()){const p=safeParse(r.json,null);if(!p)continue;economy.profiles++;economy.cash+=Number(p.cash)||0;economy.credits+=Number(p.credits)||0;economy.tokens+=Number(p.tokens)||0;}
      return json(res,200,{version:VERSION,playersOnline:clients?.size||0,accounts:accountCount,activeSquads:rooms?.size||0,revenuePence:purchases.revenue,purchaseCount:purchases.n,dau,economy,recent,recentPurchases,paymentsEnabled:!!STRIPE_SECRET_KEY});
    }
    if(url.pathname==='/api/admin/players'&&req.method==='GET'){
      if(!requireAdmin(req,res))return;const q=String(url.searchParams.get('q')||'').trim().toLowerCase(),like=`%${q}%`;const rows=(q?sql.prepare(`SELECT u.id,u.email,u.created_at,u.last_seen,u.banned,p.json FROM users u LEFT JOIN profiles p ON p.user_id=u.id WHERE lower(u.email) LIKE ? ORDER BY u.last_seen DESC LIMIT 100`).all(like):sql.prepare(`SELECT u.id,u.email,u.created_at,u.last_seen,u.banned,p.json FROM users u LEFT JOIN profiles p ON p.user_id=u.id ORDER BY u.last_seen DESC LIMIT 100`).all());
      const players=rows.map(r=>{const p=safeParse(r.json,null)||{};return{id:r.id,email:r.email,createdAt:r.created_at,lastSeen:r.last_seen,banned:!!r.banned,name:p.name||'Uncreated',level:Number(p.level)||1,cash:Number(p.cash)||0,credits:Number(p.credits)||0,tokens:Number(p.tokens)||0,kills:Number(p.stats?.zkills||p.totalKills)||0,extractions:Number(p.stats?.extractions||p.extractions)||0}});return json(res,200,{players});
    }
    const grantMatch=url.pathname.match(/^\/api\/admin\/player\/([^/]+)\/grant$/);
    if(grantMatch&&req.method==='POST'){
      if(!requireAdmin(req,res))return;const uid=decodeURIComponent(grantMatch[1]),row=sql.prepare('SELECT json FROM profiles WHERE user_id=?').get(uid);if(!row)return json(res,404,{error:'Player profile not found.'});const p=safeParse(row.json,null);if(!p)return json(res,400,{error:'Profile data is invalid.'});const b=await body(req);for(const k of ['cash','credits','tokens']){const n=Math.trunc(Number(b[k])||0);if(n)p[k]=Math.max(0,(Number(p[k])||0)+Math.max(-1_000_000,Math.min(1_000_000,n)));}sql.prepare('UPDATE profiles SET json=?,updated_at=? WHERE user_id=?').run(JSON.stringify(p),Date.now(),uid);logEvent(uid,'admin_grant',{cash:b.cash||0,credits:b.credits||0,tokens:b.tokens||0});return json(res,200,{ok:true});
    }
    const banMatch=url.pathname.match(/^\/api\/admin\/player\/([^/]+)\/ban$/);
    if(banMatch&&req.method==='POST'){
      if(!requireAdmin(req,res))return;const uid=decodeURIComponent(banMatch[1]),b=await body(req),ban=b.banned?1:0;const r=sql.prepare('UPDATE users SET banned=? WHERE id=?').run(ban,uid);if(!r.changes)return json(res,404,{error:'Player not found.'});if(ban)sql.prepare('DELETE FROM sessions WHERE user_id=?').run(uid);logEvent(uid,ban?'admin_ban':'admin_unban',{});return json(res,200,{ok:true});
    }

    if(url.pathname==='/api/health')return json(res,200,{ok:true,version:VERSION,rooms:rooms?.size||0,playersOnline:clients?.size||0,paymentEnabled:!!STRIPE_SECRET_KEY,database:'sqlite'});
    return serveStatic(req,res,url.pathname);
  }catch(err){console.error(err);return json(res,500,{error:err?.message==='body too large'?'Request too large.':'Server error.'});}
});

// ---- Squad relay + leader-hosted authoritative raid ----
// Dependency-free RFC6455 WebSocket transport. The game only uses JSON text frames.
const WS_OPEN = 1;
const WS_MAX_PAYLOAD = 4 * 1024 * 1024;
class WSConn extends EventEmitter {
  constructor(socket, head = Buffer.alloc(0)) {
    super(); this.socket = socket; this.readyState = WS_OPEN; this.buf = Buffer.alloc(0); this.frags = []; this.fragOpcode = 0;
    socket.on('data', d => this.feed(d)); socket.on('close', () => this.finish()); socket.on('end', () => this.finish());
    socket.on('error', e => { this.emit('error', e); this.finish(); });
    if (head?.length) this.feed(head);
  }
  finish() { if (this.readyState !== 3) { this.readyState = 3; this.emit('close'); } }
  frame(opcode, payload = Buffer.alloc(0)) {
    if (!Buffer.isBuffer(payload)) payload = Buffer.from(payload);
    const n = payload.length; let hdr;
    if (n < 126) { hdr = Buffer.alloc(2); hdr[0] = 0x80 | opcode; hdr[1] = n; }
    else if (n <= 0xffff) { hdr = Buffer.alloc(4); hdr[0] = 0x80 | opcode; hdr[1] = 126; hdr.writeUInt16BE(n, 2); }
    else { hdr = Buffer.alloc(10); hdr[0] = 0x80 | opcode; hdr[1] = 127; hdr.writeBigUInt64BE(BigInt(n), 2); }
    return Buffer.concat([hdr, payload]);
  }
  send(data) { if (this.readyState !== WS_OPEN) return; try { this.socket.write(this.frame(1, Buffer.from(String(data)))); } catch {} }
  pong(payload) { if (this.readyState !== WS_OPEN) return; try { this.socket.write(this.frame(10, payload)); } catch {} }
  close(code = 1000) {
    if (this.readyState !== WS_OPEN) return; this.readyState = 2;
    const b = Buffer.alloc(2); b.writeUInt16BE(code); try { this.socket.end(this.frame(8, b)); } catch { this.socket.destroy(); }
  }
  feed(data) {
    if (this.readyState === 3) return;
    this.buf = Buffer.concat([this.buf, data]);
    while (this.buf.length >= 2) {
      const a = this.buf[0], b = this.buf[1], fin = !!(a & 0x80), opcode = a & 0x0f, masked = !!(b & 0x80);
      let len = b & 0x7f, off = 2;
      if (len === 126) { if (this.buf.length < 4) return; len = this.buf.readUInt16BE(2); off = 4; }
      else if (len === 127) { if (this.buf.length < 10) return; const big = this.buf.readBigUInt64BE(2); if (big > BigInt(WS_MAX_PAYLOAD)) return this.close(1009); len = Number(big); off = 10; }
      if (len > WS_MAX_PAYLOAD) return this.close(1009);
      if (masked) off += 4;
      if (this.buf.length < off + len) return;
      let payload = Buffer.from(this.buf.subarray(off, off + len));
      if (masked) { const mask = this.buf.subarray(off - 4, off); for (let i=0;i<payload.length;i++) payload[i] ^= mask[i & 3]; }
      this.buf = this.buf.subarray(off + len);
      if (opcode === 8) { this.close(1000); return; }
      if (opcode === 9) { this.pong(payload); continue; }
      if (opcode === 10) continue;
      if (opcode === 1 || opcode === 2) { this.frags = [payload]; this.fragOpcode = opcode; }
      else if (opcode === 0 && this.frags.length) this.frags.push(payload);
      else continue;
      if (!fin) continue;
      const full = Buffer.concat(this.frags); const op = this.fragOpcode; this.frags = []; this.fragOpcode = 0;
      if (full.length > WS_MAX_PAYLOAD) return this.close(1009);
      if (op === 1) this.emit('message', full.toString('utf8'));
    }
  }
}
function acceptWebSocket(req, socket, head) {
  const key = req.headers['sec-websocket-key'];
  if (!key || String(req.headers.upgrade || '').toLowerCase() !== 'websocket') return null;
  const accept = crypto.createHash('sha1').update(String(key) + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11').digest('base64');
  socket.write('HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: ' + accept + '\r\n\r\n');
  return new WSConn(socket, head);
}

const clients = new Set();
const rooms = new Map();
const reconnecting = new Map();
const RECONNECT_GRACE_MS = 15000;
let nextPid = 100;
const safeSend = (c, msg) => { if (c?.ws?.readyState === WS_OPEN) c.ws.send(JSON.stringify(msg)); };
function roomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  for (let tries=0; tries<40; tries++) { let c=''; for(let i=0;i<4;i++) c+=chars[Math.floor(Math.random()*chars.length)]; if(!rooms.has(c)) return c; }
  return crypto.randomBytes(3).toString('hex').slice(0,4).toUpperCase();
}
function leaveRoom(c, notify=true) {
  if (!c.room) return;
  const room = rooms.get(c.room); c.room = null; c.ready = false;
  if (!room) return;
  room.members.delete(c.pid);
  if (notify && room.raid && room.leaderPid !== c.pid) safeSend(room.members.get(room.leaderPid), { t:'peer.leave', pid:c.pid });
  if (!room.members.size || room.leaderPid === c.pid) {
    for (const m of room.members.values()) { m.room = null; safeSend(m,{t:'error',msg:'Squad leader left. Room closed.'}); }
    rooms.delete(room.code); return;
  }
  broadcastSquad(room);
}
function memberView(c, room) { return { id:c.pid, name:c.name || 'Survivor', level:c.level || 1, ready:!!c.ready, leader:c.pid===room.leaderPid }; }
function broadcastSquad(room) {
  const members=[...room.members.values()].map(c=>memberView(c,room));
  for(const c of room.members.values()) safeSend(c,{t:'squad',code:room.code,members});
}
function weatherPick(){ const w=['clear','overcast','rain','fog']; return w[Math.floor(Math.random()*w.length)]; }

function onWsConnection(ws, req, user) {
  const reconnectKey = String(user.id);
  let c = reconnecting.get(reconnectKey);
  if (c) {
    reconnecting.delete(reconnectKey);
    clearTimeout(c.reconnectTimer);
    c.reconnectTimer = null;
    c.ws = ws;
    c.user = user;
  } else {
    c = { ws, user, pid: nextPid++, room:null, ready:false, name:'Survivor', level:1, look:null, lo:null, status:null, reconnectTimer:null };
  }
  clients.add(c);
  ws.on('message', raw => {
    let m; try { m=JSON.parse(String(raw)); } catch { return; }
    if (!m || typeof m.t !== 'string') return;
    if (m.t === 'hello') {
      c.name=String(m.name||'Survivor').slice(0,24); c.level=Math.max(1,Number(m.level)||1); c.look=m.look||null; c.lo=m.lo||null; c.status=m.status||null;
      safeSend(c,{t:'welcome',pid:c.pid,user:{id:user.id,email:user.email},resumed:!!c.room});
      const room=c.room?rooms.get(c.room):null;
      if(room) broadcastSquad(room);
      return;
    }
    if (m.t === 'squad.create') {
      leaveRoom(c,false); const code=roomCode(); const room={code,leaderPid:c.pid,members:new Map([[c.pid,c]]),raid:false}; rooms.set(code,room); c.room=code; c.ready=false; return broadcastSquad(room);
    }
    if (m.t === 'squad.join') {
      const code=String(m.code||'').toUpperCase(); const room=rooms.get(code);
      if(!room) return safeSend(c,{t:'error',msg:'No squad with that code.'});
      if(room.raid) return safeSend(c,{t:'error',msg:'That squad is already in a raid.'});
      if(room.members.size>=4) return safeSend(c,{t:'error',msg:'That squad is full.'});
      leaveRoom(c,false); room.members.set(c.pid,c); c.room=code; c.ready=false; return broadcastSquad(room);
    }
    if (m.t === 'squad.ready') {
      const room=rooms.get(c.room); if(!room||room.raid)return; c.ready=!!m.ready; return broadcastSquad(room);
    }
    if (m.t === 'squad.leave') return leaveRoom(c,true);
    const room=rooms.get(c.room); if(!room) return;
    if (m.t === 'squad.deploy') {
      if(c.pid!==room.leaderPid) return safeSend(c,{t:'error',msg:'Only the leader can deploy.'});
      if(room.members.size<2) return safeSend(c,{t:'error',msg:'Invite at least one friend before deploying.'});
      const unready=[...room.members.values()].filter(x=>!x.ready);
      if(unready.length) return safeSend(c,{t:'error',msg:'Everyone must be Ready before deployment.'});
      if([...room.members.values()].some(x=>!x.lo)) return safeSend(c,{t:'error',msg:'A player loadout is still syncing. Try again.'});
      room.raid=true;
      const payload={t:'raid.start',seed:crypto.randomInt(1,0x7fffffff),hour:Number(m.hour)||10.5,length:1800,weather:weatherPick(),hostPid:room.leaderPid,players:[...room.members.values()].map(x=>({id:x.pid,name:x.name,level:x.level,look:x.look,lo:x.lo,status:x.status}))};
      for(const x of room.members.values()) safeSend(x,payload);
      return;
    }
    if(!room.raid) return;
    if(m.t==='raid.done' && c.pid===room.leaderPid) { room.raid=false; for(const x of room.members.values()) x.ready=false; broadcastSquad(room); return; }
    const host=room.members.get(room.leaderPid); if(!host) return;
    if(m.t==='in' && c.pid!==room.leaderPid) return safeSend(host,{t:'peer.in',pid:c.pid,i:m.i});
    if(m.t==='cmd' && c.pid!==room.leaderPid) return safeSend(host,{t:'peer.cmd',pid:c.pid,c:m.c});
    if(m.t==='host.snap' && c.pid===room.leaderPid) {
      const states=new Map(Array.isArray(m.states)?m.states:[]);
      for(const x of room.members.values()) {
        if(x.pid===room.leaderPid) continue;
        safeSend(x,{t:'snap',...m.snap,me:states.get(x.pid)||null});
      }
      return;
    }
    if(m.t==='host.end' && c.pid===room.leaderPid) {
      const target=room.members.get(Number(m.pid)); if(target) safeSend(target,{t:'raid.end',result:m.result});
      return;
    }
  });
  ws.on('close',()=>{
    clients.delete(c);
    if (c.ws !== ws) return;
    c.ws = null;
    const pausedRoom=rooms.get(c.room);
    if(pausedRoom?.raid&&pausedRoom.leaderPid!==c.pid)safeSend(pausedRoom.members.get(pausedRoom.leaderPid),{t:'peer.pause',pid:c.pid});
    reconnecting.set(String(c.user.id), c);
    clearTimeout(c.reconnectTimer);
    c.reconnectTimer = setTimeout(()=>{
      reconnecting.delete(String(c.user.id));
      leaveRoom(c,true);
    }, RECONNECT_GRACE_MS);
  });
  ws.on('error',()=>{});
}

server.on('upgrade',(req,socket,head)=>{
  const url=new URL(req.url,`http://${req.headers.host||'localhost'}`);
  if(url.pathname!=='/ws'){ socket.destroy(); return; }
  const user=authUser(req); if(!user){ socket.write('HTTP/1.1 401 Unauthorized\r\nConnection: close\r\n\r\n'); socket.destroy(); return; }
  const ws=acceptWebSocket(req,socket,head); if(!ws){ socket.destroy(); return; }
  onWsConnection(ws,req,user);
});

server.listen(PORT,'0.0.0.0',()=>console.log(`DOVY: DEADZONE 0.5.10 server listening on :${PORT}`));

// DOVY: DEADZONE service worker — 0.5.10 Cloudflare Edition
// Core code stays network-first so fixes and balance changes replace stale PWA files quickly.
const CORE = 'dz-core-0.5.10-cloudflare-1';
const FONT_CACHE = 'dz-fonts-v5';
const SHELL = [
  './','index.html','game.js','polish.css','manifest.webmanifest',
  'icon-180.png','icon-192.png','icon-512.png',
  'assets/menu-safehouse.jpg','assets/farm.jpg','assets/world.jpg','assets/characters.jpg','assets/coop.jpg','assets/admin.jpg','assets/concept-board.jpg','assets/harrow-cut-0510.png','assets/survivors-0510.png'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CORE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CORE && k !== FONT_CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
async function networkFirst(request) {
  const cache = await caches.open(CORE);
  try {
    const fresh = await fetch(request, { cache:'no-store' });
    if (fresh && fresh.ok) cache.put(request, fresh.clone());
    return fresh;
  } catch (err) {
    const cached = await cache.match(request, {ignoreSearch:true});
    if (cached) return cached;
    if (request.mode === 'navigate') return cache.match('index.html');
    throw err;
  }
}
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.pathname.startsWith('/api') || url.pathname.startsWith('/ws') || url.pathname === '/admin' || url.pathname.endsWith('/admin.html')) return;
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(caches.open(FONT_CACHE).then(async cache => {
      const cached = await cache.match(request, {ignoreSearch:true}); if (cached) return cached;
      const response = await fetch(request); if (response && response.ok) cache.put(request,response.clone()); return response;
    })); return;
  }
  const isCore = request.mode === 'navigate' || (url.origin === self.location.origin && (
    url.pathname.endsWith('/game.js') || url.pathname.endsWith('/polish.css') || url.pathname.endsWith('/index.html') || url.pathname.endsWith('/manifest.webmanifest') || url.pathname === '/' || url.pathname.endsWith('/')
  ));
  if (isCore) { event.respondWith(networkFirst(request)); return; }
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (url.origin === self.location.origin && response && response.ok) caches.open(CORE).then(cache => cache.put(request,response.clone()));
    return response;
  })));
});

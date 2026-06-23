const CACHE = 'mmw-cache-v1';
const PRECACHE = [
  '/',
  'index.html',
  'css/style.css',
  'js/main.js',
  'Nav Logo new.png',
  'favicon.png',
  'DRONE.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(PRECACHE)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.url.includes('cdnjs.cloudflare.com') || e.request.url.includes('fonts.googleapis.com') || e.request.url.includes('fonts.gstatic.com')) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
    return;
  }
  if (e.request.url.includes('GADGETS/') || e.request.url.includes('.mp3') || e.request.url.includes('.mp4')) {
    e.respondWith(
      caches.open(CACHE).then((cache) => {
        return cache.match(e.request).then((cached) => {
          const fetched = fetch(e.request).then((response) => {
            if (response.ok) cache.put(e.request, response.clone());
            return response;
          });
          return cached || fetched;
        });
      })
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
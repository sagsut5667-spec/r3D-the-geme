self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('r3d-store').then((cache) => cache.addAll([
      './',
      './index.html',
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});

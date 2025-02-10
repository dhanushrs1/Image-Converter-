const CACHE_NAME = 'img-converter-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  // List any additional assets (CSS, JS, images, etc.)
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});

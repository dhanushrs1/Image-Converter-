const CACHE_NAME = 'img-tools-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './converter.html',
  './resize.html',
  './compress.html',
  './crop.html',
  './rotate.html',
  './manifest.json'
];
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});

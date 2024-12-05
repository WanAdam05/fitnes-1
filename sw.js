const CACHE_NAME = 'fitness-app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/bmi.html',
  '/report.html',
  '/settings.html',
  '/styles.css',
  '/script.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
}); 
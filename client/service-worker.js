self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('app-cache').then(cache => {
      return cache.addAll([
        '/',
        '/public/index.html',
        '/client.bundle.js',
      ]);
    })
  );
});
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('app-cache').then(cache => {
      return cache.addAll([
        '/public/',
        '/public/index.html',
      ]);
    })
  );
});

self.addEventListener('activate', event => {
  // 필요한 경우 활성화 이벤트를 처리할 수 있습니다.
});

self.addEventListener('fetch', event => {
  // 필요한 경우 네트워크 요청을 가로채거나 처리할 수 있습니다.
});

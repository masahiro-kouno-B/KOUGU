self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('my-cache').then((cache) => {
            return cache.addAll([
                'index.html',
                '工具編.bmp',
                '資材編.bmp',
                'ロボット合体1.mp3',
                'ロボット起動1.mp3',
                'style.css', // もしCSSファイルがあれば
                'kensaku_script.js' // JavaScriptファイル
                // 他の必要なリソースも追加
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

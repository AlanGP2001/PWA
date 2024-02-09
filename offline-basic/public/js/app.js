if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js')
}
if (window.caches) {
    // console.log('caches supported');

    // Crear primer cache
    // caches.open('Test-1');
    // caches.open('Test-2');

    // Verificar si existe un cache
    // caches.has('Test-3').then(console.log);

    // Eliminar un cache
    caches.delete('Test-2').then(console.log);

    // Guardar un archivo en el cache
    caches.open('Cache-v1').then(cache => {
        // Agregar un solo archivo
        cache.add('index.html');

        // Agregar varios archivos
        cache.addAll([
            'logo192.png',
            'logo512.png',
            '/pages/offline.html',
        ]).then(() => {
            // borra un archivo del cache
            cache.delete('logo192.png');
        });

        // Verificar si existe un archivo en el cache
        cache.match('index.html').then(res => {
            res.text().then(console.log);
        });

    });
}

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
            // Interceptar un archivo por otro
            cache.put('index.html', new Response('Interceptado por otro archivo'));
        });

        // Obtener todos los archivos del cache
        cache.keys().then(keys => {
            console.log(keys);
        });

    });
}

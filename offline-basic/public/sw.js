self.addEventListener('fetch', event => {

    const offlineResp = new Response(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mi Página Web</title>
        </head>
        <body>
            <h1>Bienvenido a mi página web Offline</h1>
            <p>Para ver el contenido, necesitas una conexión a internet.</p>
        </body>
        </html>
    `, {
        headers: {
            'Content-Type': 'text/html'
        }
    });

    const resp = fetch(event.request)
        .catch(() => offlineResp)

    event.respondWith(resp)
});
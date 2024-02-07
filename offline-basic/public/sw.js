self.addEventListener('fetch', event => {

    const offlineResp = new Response(`
        Bienvenido a mi página web.
        Para ver el contenido, necesitas una conexión a internet.
    `)

    const resp = fetch(event.request)
        .catch(() => offlineResp)

    event.respondWith(resp)
});
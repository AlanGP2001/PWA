const cargandoDatosDeAPI = (url) => {
    return new Promise((resolve, reject) => {
        // Simula una solicitud a una API
        fetch(url).then(response => {
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            resolve(data);
        })
        .catch(error => {
            reject(`Error al cargar datos: ${error.message}`);
        });
    });
}

// Uso de la función para cargar datos de una API
const apiUrl = 'https://fakestoreapi.com/products/1';
cargandoDatosDeAPI(apiUrl)
    .then(data => {
        console.log("Datos cargados:",data);
    })
    .catch(error => {
        console.log("Error:", error);
    });

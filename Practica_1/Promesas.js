// Definición de una función que carga datos de una API mediante una promesa
const cargandoDatosDeAPI = (url) => {
    return new Promise((resolve, reject) => {
        // Simula una solicitud a una API utilizando fetch
        fetch(url).then(response => {
            // Verifica si la respuesta de la API fue exitosa (status 200)
            if (!response.ok) {
                // Si hay un error, lanza una excepción con el mensaje correspondiente
                throw new Error(`Error en la solicitud: ${response.status}`);
            }
            // Parsea la respuesta como JSON y lo devuelve
            return response.json();
        })
        .then(data => {
            // Resuelve la promesa con los datos obtenidos de la API
            resolve(data);
        })
        .catch(error => {
            // En caso de cualquier error durante el proceso, rechaza la promesa con un mensaje de error
            reject(`Error al cargar datos: ${error.message}`);
        });
    });
}

// Uso de la función para cargar datos de una API
const apiUrl = 'https://fakestoreapi.com/products/1';
cargandoDatosDeAPI(apiUrl)
    .then(data => {
        // En caso de éxito, imprime los datos cargados en la consola
        console.log("Datos cargados:", data);
    })
    .catch(error => {
        // En caso de error, imprime el mensaje de error en la consola
        console.log("Error:", error);
    });

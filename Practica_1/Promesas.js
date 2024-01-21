// Creación de una nueva promesa que simula una operación exitosa después de 3 segundos
let promesaExitosa = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Resuelve la promesa con un mensaje indicando que la operación fue exitosa
        resolve("La operación fue exitosa");
    }, 3000); // Espera 3000 milisegundos (3 segundos) antes de resolver la promesa
});

// Manejo de la promesa utilizando el método then (caso de éxito) y catch (caso de error)
promesaExitosa.then((mensaje) => {
    // En caso de éxito, imprime el mensaje en la consola
    console.log(mensaje);
}).catch((error) => {
    // En caso de error, imprime el error en la consola
    console.log(error);
});

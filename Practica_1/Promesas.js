// Creación de una nueva promesa que simula un rechazo inmediato con un mensaje de error
let promesaExitosa = new Promise((resolve, reject) => {
    // Simulamos un error durante la operación
    reject("La promesa fue rechazada");
});

// Manejar la promesa con error utilizando el método then (caso de éxito) y catch (caso de error)
promesaExitosa.then((mensaje) => {
    // En caso de éxito (que no ocurrirá aquí debido al rechazo), imprime el mensaje en la consola
    console.log(mensaje);
}).catch((error) => {
    // En caso de error, imprime el error en la consola
    console.log(error);
});

let promesaExitosa = new Promise((resolve, reject) => {
    // Simulamos un error durante la operación
    reject("La promesa fue rechazada");
});

// Manejar la promesa con error
promesaExitosa.then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.log(error);
});
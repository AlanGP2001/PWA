// Definición de una función asíncrona que simula una operación de suma lenta
const sumarLento = (numero) => {
    return new Promise((resolve, reject) => {
        // Simula una operación de suma lenta después de 800 milisegundos
        setTimeout(() => {
            resolve(numero + 1);
            // Se podría utilizar reject para simular un error en la función
            // reject(console.log("Error en función de sumar lento"))
        }, 800);
    });
}

// Definición de una función asíncrona que simula una operación de suma rápida
const sumarRapido = (numero) => {
    return new Promise((resolve, reject) => {
        // Simula una operación de suma rápida después de 300 milisegundos
        setTimeout(() => {
            resolve(numero + 1);
        }, 300);
    });
}

// Ejecuta ambas funciones de manera concurrente usando Promise.all
Promise.all([sumarRapido(6), sumarLento(5), true, "Hola mundo"])
    .then(respuestas => {
        // Imprime las respuestas obtenidas, que incluyen el resultado de las operaciones
        console.log(respuestas);
    })
    .catch(console.log);

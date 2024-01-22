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
            // Se podría utilizar reject para simular un error en la función
            // reject(console.log("Error en función de sumar rapido"))
        }, 300);
    });
}

// Promise.race compite entre las promesas y devuelve la respuesta que se resuelva más rápido
Promise.race([sumarLento(5), sumarRapido(6)])
    .then(respuestas => {
        // Imprime la respuesta que se resolvió más rápido
        console.log(respuestas);
    })
    .catch(console.log);

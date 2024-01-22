/*
    Crea una función promesaConTimeout que tome una promesa y un tiempo límite en milisegundos. 
    La función debe resolver la promesa dentro del tiempo límite. Si la promesa no se resuelve 
    en el tiempo especificado, debería rechazar con un mensaje indicando que se ha agotado el tiempo.
*/

// Función que agrega un timeout a una promesa
const promesaConTimeout = (promesa, tiempoLimite) => {
    // Crea una nueva promesa con la lógica de timeout
    return new Promise((resolve, reject) => {
        // Configura un temporizador para el tiempo límite
        const timeout = setTimeout(() => {
            // Si la promesa no se resuelve dentro del tiempo especificado, rechaza con un mensaje
            reject(`Tiempo de espera agotado (${tiempoLimite} ms)`);
        }, tiempoLimite);

        // Ejecuta la promesa original
        promesa.then((resultado) => {
            // Si la promesa se resuelve, limpia el temporizador y resuelve la nueva promesa
            clearTimeout(timeout);
            resolve(resultado);
        }).catch((error) => {
            // Si la promesa es rechazada, limpia el temporizador y rechaza la nueva promesa con el mismo error
            clearTimeout(timeout);
            reject(error);
        });
    });
};

// Ejemplo de uso:
const promesaLenta = new Promise(resolve => setTimeout(() => resolve("¡Promesa resuelta!"), 2000));

// Llamada a la función para agregar timeout a la promesa
// const tiempoLimite = 2000;
const tiempoLimite = 1500;
promesaConTimeout(promesaLenta, tiempoLimite)
    .then(resultado => {
        console.log("Operación completada:", resultado);
    })
    .catch(error => {
        console.error("Error:", error);
    });

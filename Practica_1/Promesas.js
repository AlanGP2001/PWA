// Definición de una función que simula una operación con un tiempo de espera (timeout)
const ejecutarConTimeout = (ms) => {
    return new Promise((resolve, reject) => {
        // Simula una operación que toma cierto tiempo utilizando setTimeout
        setTimeout(() => {
            // Resuelve la promesa después del tiempo especificado
            resolve(`Operación completa después de ${ms} milisegundos`);
        }, ms);
    });
};

// Uso de la función con timeout
const tiempoLimite = 2000; // Tiempo límite en milisegundos
ejecutarConTimeout(tiempoLimite)
    .then((resultado) => {
        // En caso de éxito, imprime el resultado en la consola
        console.log(resultado);
    })
    .catch((error) => {
        // En caso de error (que no ocurrirá aquí), imprime el mensaje de error en la consola
        console.log(error);
    });

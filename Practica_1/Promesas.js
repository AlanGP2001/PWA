const ejecutarConTimeout = (ms) => {
    return new Promise((resolve, reject) => {
        // Simula una operación que toma cierto tiempo
        setTimeout(() => {
            resolve(`Operacion completa despues de ${ms} milisegundos`);
        }, ms);
    });
};

// Uso de la función con timeout
const tiempoLimite = 2000;
ejecutarConTimeout(tiempoLimite)
    .then((resultado) => {
        console.log(resultado);
    }).catch((error) => {
        console.log(error);
    });

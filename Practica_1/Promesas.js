/*
    Crea una función realizarOperacionesAsincronas que toma un array de funciones que devuelven promesas. 
    La función debe ejecutar estas operaciones de forma secuencial, resolviendo cada promesa antes de 
    pasar a la siguiente. Si alguna promesa es rechazada, la función debe detenerse y rechazar con el motivo.
*/

// Función que realiza operaciones asincrónicas de forma secuencial
const realizarOperacionesAsincronas = (funcionesPromesa) => {
    // Inicializa una promesa que se resuelve inmediatamente
    let promesaActual = Promise.resolve();

    // Itera sobre las funciones de promesa
    for (const funcion of funcionesPromesa) {
        // Encadena la ejecución de las funciones de promesa de forma secuencial
        promesaActual = promesaActual.then(funcion)
            .catch((motivo) => {
                // Si alguna promesa es rechazada, detiene la ejecución y rechaza la promesa
                throw motivo;
            });
    }

    // Devuelve la promesa final resultante de la ejecución secuencial
    return promesaActual;
};

// Ejemplo de uso:
const operacion1 = () => new Promise(resolve => setTimeout(() => resolve(1), 1000));
const operacion2 = () => new Promise(resolve => setTimeout(() => resolve(2), 500));
const operacion3 = () => new Promise((resolve, reject) => setTimeout(() => reject("Error en operacion3"), 700));

const operaciones = [operacion1, operacion2, operacion3];

// Llamada a la función para realizar las operaciones de forma secuencial
realizarOperacionesAsincronas(operaciones)
    .then(resultados => {
        console.log("Operaciones completadas con éxito:", resultados);
    })
    .catch(error => {
        console.error("Error durante las operaciones:", error);
    });
    
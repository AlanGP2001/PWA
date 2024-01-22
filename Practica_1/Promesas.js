/*
    Crea una función esperarNVeces que tome un número n y devuelva una promesa. Esta promesa debe resolverse con el mensaje 
    "¡He esperado N veces!" después de esperar 1 segundo por cada número del 1 al n. Por ejemplo, si n es 3, la promesa 
    debería resolvere después de esperar 1 segundo, luego 2 segundos, y finalmente 3 segundos.
*/

// Función que devuelve una promesa después de esperar 1 segundo por cada número del 1 al n
const esperarNVeces = (n) => {
    // Validación para asegurarse de que n sea un número entero positivo
    if (typeof n !== 'number' || !Number.isInteger(n) || n < 1) {
        return Promise.reject("El argumento debe ser un número entero positivo mayor que cero.");
    }

    // Array de promesas para esperar 1 segundo por cada número del 1 al n
    const promesas = Array.from({ length: n }, (_, index) => {
        const espera = index + 1; // Tiempo de espera en segundos
        return new Promise(resolve => setTimeout(() => resolve(`¡He esperado ${espera} veces!`), espera * 1000));
    });

    // Devuelve una promesa que se resuelve después de esperar todas las veces
    return Promise.all(promesas);
};

// Ejemplo de uso:
const vecesAesperar = 3;

// Llamada a la función para esperar N veces
esperarNVeces(vecesAesperar)
    .then(resultados => {
        resultados.forEach(resultado => console.log(resultado));
    })
    .catch(error => {
        console.error("Error:", error);
    });

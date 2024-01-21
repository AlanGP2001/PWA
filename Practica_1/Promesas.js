// Definición de una función asíncrona para imprimir el conteo
const imprimirConteo = async () => {
    for (let i = 1; i <= 10; i++) {
        // Espera 800 milisegundos antes de imprimir el número actual
        await new Promise(resolve => setTimeout(resolve, 800));
        console.log(i);
    }
};

// Llamada a la función para iniciar el conteo
imprimirConteo();

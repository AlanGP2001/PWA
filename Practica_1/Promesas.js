// Definición de una función asíncrona para imprimir el conteo con manejo de error
const imprimirConteoConError = async () => {
    try {
        for (let i = 1; i <= 10; i++) {
            // Espera 800 milisegundos antes de imprimir el número actual
            await new Promise(resolve => setTimeout(resolve, 800));

            // Verifica si el número actual es mayor que 8 y muestra un mensaje de error
            if (i > 8) {
                throw new Error("Error: La iteración superó el valor 8");
            }

            // Imprime el número actual
            console.log(i);
        }
    } catch (error) {
        // Captura el error y muestra el mensaje de error en la consola
        console.error(error.message);
    }
};

// Llamada a la función para iniciar el conteo con manejo de error
imprimirConteoConError();

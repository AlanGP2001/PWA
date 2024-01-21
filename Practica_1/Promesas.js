// Definición de una función asíncrona
const funcionAsincrona = async () => {
    // Simula una operación asíncrona, por ejemplo, una espera de 2 segundos
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Después de la espera, realiza alguna acción
    console.log("Operación asíncrona completada");
};

// Llamada a la función asíncrona
funcionAsincrona();

// Este mensaje se imprimirá inmediatamente después de la llamada a la función,
// ya que la función asíncrona no bloquea la ejecución del código.
console.log("Fin del programa (antes de que la operación asíncrona se complete)");

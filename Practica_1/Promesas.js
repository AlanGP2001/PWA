// Función asíncrona que simula una tarea
const tareaAsincrona = async (nombre) => {
    console.log(`Inicio de la tarea ${nombre}`);
    // Simula una espera de 2 segundos
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(`Fin de la tarea ${nombre}`);
};

// Función principal que ejecuta las tareas de manera asíncrona
const ejecutarTareasAsincronas = async () => {
    console.log("Inicio del proceso");

    // Usa await para ejecutar las tareas de manera secuencial
    await tareaAsincrona("A");
    await tareaAsincrona("B");

    console.log("Fin del proceso");
};

// Llamada a la función principal para iniciar el proceso
ejecutarTareasAsincronas();

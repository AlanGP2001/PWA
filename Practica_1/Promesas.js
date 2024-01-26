/*
  Ejercicio: Crea una solicitud a la api de fake y pinta los datos en el archivo index.html
  Utiliza promesas para en caso de que la solicitud no sea exitosa devuelva el contenido del
  archivo not-found.html con el mensaje de que no se ha podido completar la solicitud.
*/

fetch('https://jsonplaceholder.typicode.com/posts') // reemplaza esta URL con la URL de tu API
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    // Aquí es donde insertarías los datos en tu archivo index.html
    // Este es solo un ejemplo, necesitarás ajustarlo según tus necesidades
    const container = document.getElementById('container');
    data.forEach(item => {
      const div = document.createElement('div');
      div.textContent = item.title;
      container.appendChild(div);
    });
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
    fetch('not-found.html')
      .then(response => response.text())
      .then(data => {
        document.body.innerHTML = data;
        document.body.innerHTML += '<p>No se ha podido completar la solicitud.</p>';
      });
  });
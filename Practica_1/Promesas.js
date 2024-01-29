/*
  Ejercicio: Crea una solicitud a la api de fake y pinta los datos en el archivo index.html
  Utiliza promesas para en caso de que la solicitud no sea exitosa devuelva el contenido del
  archivo not-found.html con el mensaje de que no se ha podido completar la solicitud.
*/


fetch('https://fakestoreapi.com/products/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('La respuesta no es válida');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Aquí es donde insertarías los datos en tu archivo index.html
    // Este es solo un ejemplo, necesitarás ajustarlo según tus necesidades
    const container = document.getElementById('container');
    const div = document.createElement('div');
    for (const property in data) {
      if (property === 'image') {
        const img = document.createElement('img');
        img.src = data[property];
        img.alt = data.title || 'Producto';
        img.style.width = '300px';
        img.style.height = '300px';
        div.appendChild(img);
      } else if (typeof data[property] === 'object' && data[property] !== null) {
        for (const subProperty in data[property]) {
          const p = document.createElement('p');
          p.textContent = `${property} - ${subProperty}: ${data[property][subProperty]}`;
          div.appendChild(p);
        }
      } else {
        const p = document.createElement('p');
        p.textContent = `${property}: ${data[property]}`;
        div.appendChild(p);
      }
    }
    container.appendChild(div);
  })
  .catch(error => {
    console.error('Ha habido un problema con la respuesta:', error);
    fetch('not-found.html')
      .then(response => response.text())
      .then(data => {
        document.body.innerHTML = data;
        document.body.innerHTML += '<p>No se ha podido completar la solicitud.</p>';
      });
  });
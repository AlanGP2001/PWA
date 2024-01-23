// Fetch archivos locales

// Almacena de manera local una imagen dentro de este proyecto en la carpeta "img" realiza una solicitud fetch a esa umagen y muestra la imagen en el navegador

fetch('img/Reck_and_Morty.jpeg')
  .then(response => response.blob())
  .then(image => {
    let outside = URL.createObjectURL(image);
    let imgElement = document.createElement('img');
    imgElement.src = outside;
    document.body.appendChild(imgElement);
  })
  .catch(error => console.error('Error:', error));
// Solicitud a una API con fecth
fetch('https://fakestoreapi.com/products/1')
  .then(response => response.json())
  .then(data => console.log(data))
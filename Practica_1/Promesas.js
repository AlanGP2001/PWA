// Manejo de errores
fetch('https://fakestoreapi.com/products/-1')
  .then(response => {
    response.json().then(console.log)
  })
  .catch(error => {
    console.log('Error de la peticion' + error)
  })
// Manejo de errores
fetch('https://fakestoreapi.com/products/1')
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error('Respuesta no valida')
    }
  })
  .then(console.log)
  .catch(error => {
    console.log('Error de la peticion' + error)
  })
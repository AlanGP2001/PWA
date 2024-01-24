// Solicitud a una API con fecth
fetch('https://fakestoreapi.com/products/1')
  .then(response => {
    response.clone().json()
      .then(data => {
        console.log(data);
      })
      response.clone().json()
      .then(data => {
        console.log(data);
      })
      response.json()
      .then(data => {
        console.log(data);
      })
  })
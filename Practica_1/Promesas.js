let user = {
    name: 'Alan',
    age: 22
}

fetch('https://reqres.in/api/users', {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(res => res.json())
.then(res => console.log(res))
.catch(error => console.error('Error del Fech:', error))
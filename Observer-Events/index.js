//Requiro los listeners, no necesito asignarlos a una constante
//Cuando se suscribe el evento no esta encapsulado dentro de una funcion
// event.on => acceso global
require('./listeners/emailListener')
require('./listeners/statsListener')

const registerUser = require('./userRegistration')

const user1 = {
    id: 1,
    email: 'user1@gmail.com',
    name: 'John Doe',
}
const user2 = {
    id: 2,
    email: 'user2@gmail.com',
    name: 'Jane Doe',
}

registerUser(user1)
registerUser(user2)
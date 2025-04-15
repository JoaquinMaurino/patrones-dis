const notifier = require('./notifier')

function registerUser(user) {
    console.log('Registrando ususario...')
    //register user

    //emitimos el evento y adjuntamos al usuario
    notifier.emit('userRegistered', user)
    //Implementar registro 
    return user
}

module.exports = registerUser;
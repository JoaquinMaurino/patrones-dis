const notifier = require('../notifier')

function sendEmail(user){
    console.log(`Sending email to user: ${user.email}`);   
}

// Nos suscribimos al evento:
// cuando el evento pase, se ejecuta la funcion
notifier.on('userRegistered', sendEmail)

module.exports = sendEmail
const diagnostics = require("node:diagnostics_channel");

//Creo un canal
const channel = diagnostics.channel("mi_app");

function onMessage(message) {
  console.log('Mensaje recibido: ', message);
}

//Me suscribo al canal
diagnostics.subscribe("mi_app", onMessage);

//Si el canal tiene suscriptores, publica un string
if (channel.hasSubscribers) {
  channel.publish("hola");
}

diagnostics.unsubscribe("mi_app", onMessage);

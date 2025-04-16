const fs = require("node:fs");
const { Transform, Pipelina, pipeline } = require("node:stream");

const data = fs.createReadStream("entrada.txt", "utf-8");

//Funcion que convierte a mayusculas
//Acá estás creando un objeto basado en la clase Transform de Node.js.
//Transform es una subclase de Duplex, que es un tipo de Stream que lee y escribe al mismo tiempo.
const toUpperCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});
//Conecta todo el flujo
pipeline(
    data, //lee el archivo
    toUpperCase, //transforma a mayusculas
    fs.createWriteStream("salida.txt", "utf-8"), //escribe el archivo de salida
    //En la posicion 3 de parametros tenemos un callback para el manejo de errores
    (err)=>{
        if(err){
            console.log(err);
        }
    }
);
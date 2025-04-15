const fs = require('node:fs');

//No eficiente si el archivo es muy grande
//const data = fs.readFileSync('entrada.txt', 'utf8')
//console.log(data);

//Para eficiencia se crea un Stream
const dataStream = fs.createReadStream('entrada.txt', 'utf8')

//Este es un event emitter
//'data' y 'end' son eventos que el Readable Stream puede emitir
//no almacena todo el archivo en maemoria, va por partes (chunks)
dataStream.on('data', (chunk)=>{
    console.log(chunk.toString())
});

dataStream.on('end', ()=>{
    console.log('Fin del archivo')
});

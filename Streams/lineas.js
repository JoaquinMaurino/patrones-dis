const fs = require("node:fs");
const readLine = require('node:readline')

async function leerLineas(){
    const fileStream = fs.ReadStream("lineas.txt", "utf-8");
    const lines = readLine.createInterface({
        input:fileStream,
        //Espera siempre a que la secuencia completa \r\n llegue antes de considerar el fin de línea. Ideal para archivos bien formateados o multiplataforma.
        crlfDelay: Infinity
    })
    for await (const line of lines){
        console.log(`Linea UpperCase: ${line.toUpperCase()}`); 
    }
}

leerLineas().catch((err)=>{
    console.log(err);
})
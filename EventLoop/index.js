const fs = require('fs');

console.log("1 - Inicio sincrónico");

// 📌 Microtask: Promesa
Promise.resolve().then(() => {
    console.log("2 - Microtask: Promise");
});

// 📌 Next Tick
//Permite ejecutar por fuera del eventloop (se pone primer en la cola despues del codigo sincronico)
process.nextTick(() => {
    console.log("3 - process.nextTick()");
});

// 📌 Timer
setTimeout(() => {
    console.log("4 - Timer: setTimeout");
}, 0);

// 📌 I/O Callback
fs.readFile(__filename, () => {
    console.log("5 - I/O Callback: fs.readFile");
});

// 📌 setImmediate
setImmediate(() => {
    console.log("6 - Check phase: setImmediate");
});

console.log("7 - Fin sincrónico");

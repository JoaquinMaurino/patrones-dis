function operacionCompleja() {
  console.time("operacionCompleja");
  console.log("Realizando operacion compleja");
  for (let i = 0; i < 10000; i++) {
    //Simula un calculo
    Math.sqrt(i);
  }
  console.timeEnd("operacionCompleja");
  console.trace('Fin de operacion compleja')
}

function operacionA() {
  operacionCompleja();
}

function procesoB() {
  operacionA();
}

procesoB();

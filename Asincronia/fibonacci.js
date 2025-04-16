//Al definir la funcin con * (generador)
//lo que retorna la funcion no son valores, sino un iterador
function* fibonacci() {
  let current = 0;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const fib = fibonacci()
console.log('Fuera del ciclo: ',fib.next().value);

//next() y .value son parte del protocolo de iteradores que usan los generadores en JavaScript.
for (let i = 0; i < 10; i++){
    console.log('Dentro del ciclo: ',fib.next().value);
}

console.log('Fuera del ciclo: ',fib.next().value);

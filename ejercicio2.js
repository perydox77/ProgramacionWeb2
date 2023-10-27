function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  let posicion = 8;
  let resultado = fibonacci(posicion);
  console.log("El número de Fibonacci en la posición " + posicion + " es: " + resultado);
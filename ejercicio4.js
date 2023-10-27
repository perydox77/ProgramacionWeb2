function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  let rangoInicio = 1;
  let rangoFin = 20;
  let numerosPrimos = [];
  for (let i = rangoInicio; i <= rangoFin; i++) {
    if (esPrimo(i)) {
      numerosPrimos.push(i);
    }
  }
  console.log("Números primos en el rango " + rangoInicio + " - " + rangoFin + ": " + numerosPrimos);
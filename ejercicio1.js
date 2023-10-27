function esPalindromo(palabra) {
    let palabraReversa = palabra.split('').reverse().join('');
    if (palabra === palabraReversa) {
      return true;
    } else {
      return false;
    }
  }
  
  let palabra = "reconocer";
  if (esPalindromo(palabra)) {
    console.log(palabra + " es un palíndromo.");
  } else {
    console.log(palabra + " no es un palíndromo.");
  }
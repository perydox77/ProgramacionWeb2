// Mini juego: Adivina el número

// Generar un número aleatorio entre 1 y 100
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Variable para almacenar el número de intentos
var intentos = 0;

// Función para procesar el intento del jugador
function procesarIntento() {
  // Obtener el número ingresado por el jugador
  var numeroIngresado = parseInt(prompt("Adivina el número (entre 1 y 100):"));

  // Incrementar el número de intentos
  intentos++;

  // Verificar si el número ingresado es correcto
  if (numeroIngresado === numeroAleatorio) {
    alert("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
  } else if (numeroIngresado < numeroAleatorio) {
    alert("Intenta con un número más grande.");
    procesarIntento(); // Llamada recursiva para permitir más intentos
  } else {
    alert("Intenta con un número más pequeño.");
    procesarIntento(); // Llamada recursiva para permitir más intentos
  }
}

// Iniciar el juego llamando a la función para procesar el intento
procesarIntento();
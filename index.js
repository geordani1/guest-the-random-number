// Elementos del DOM
let highScore = document.getElementById("high-score");
const numberEL = document.getElementById("number");
const checkBtn = document.getElementById("button");
const randomDisplay = document.getElementById("randomNumber");
const advice = document.getElementById("advice");

// Variables de juego
let score = 10; // Puntos iniciales
let highscore = 0; // Mejor puntaje
let ramdoNumber = Math.floor(Math.random() * 20) + 1; // Número aleatorio entre 1 y 20

// Asegurarse de que el número esté en el rango [1, 20]
numberEL.addEventListener('input', () => {
    if (Number(numberEL.value) <= 0) {
        numberEL.value = 1; 
    } else if (Number(numberEL.value) > 20) {
        numberEL.value = 20;
    }
});

// Lógica del botón "Check"
checkBtn.addEventListener("click", function() {
    const userGuess = parseInt(numberEL.value);

    if (userGuess === ramdoNumber) {
        // Jugador gana
        randomDisplay.innerHTML = `Número correcto: ${ramdoNumber}`;
        advice.innerHTML = "¡Ganaste! 🎊";
        
        // Actualizar mejor puntaje
        if (score > highscore) {
            highscore = score;
            highScore.innerHTML = `Mejor puntaje: ${highscore}`;
        }
    } else {
        // Intento erróneo
        advice.innerHTML = userGuess > ramdoNumber ? "¡Demasiado alto! ⬆️" : "¡Demasiado bajo! ⬇️";
        score--; // Reducir puntaje
        document.getElementById("score").innerHTML = `Puntaje: ${score}`;
        
        // Verificar si el puntaje llegó a 0
        if (score <= 0) {
            advice.innerHTML = "¡Perdiste! 😢 Intenta de nuevo.";
            randomDisplay.innerHTML = `El número era: ${ramdoNumber}`;
            score = 0; // Puntaje no puede ser negativo
            checkBtn.disabled = true; // Desactivar botón de "Check"
        }
    }
});

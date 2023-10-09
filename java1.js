const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function adivinaNumero() {
    const estimacion = parseInt(document.getElementById("Adivinar").value);
    intentos++;

    if (estimacion === numeroAleatorio) {
        document.getElementById("mensaje").innerHTML = `Adivinaste el número ${numeroAleatorio} en ${intentos} intentos.`;
    } else if (estimacion < numeroAleatorio) {
        document.getElementById("mensaje").innerHTML = "El número es más alto. Sigue intentando.";
    } else {
        document.getElementById("mensaje").innerHTML = "El número es más bajo. Sigue intentando.";
    }
}
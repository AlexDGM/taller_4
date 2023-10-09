document.addEventListener("DOMContentLoaded", function () {
    const preguntas = [
        {
            pregunta: "¿Cuál es la capital de Francia?",
            respuesta: "Paris"
        },
        {
            pregunta: "¿Quién escribió 'Cien años de soledad'?",
            respuesta: "Gabriel García Márquez"
        }
    ];

    let respuestasCorrectas = 0;
    let respuestasIncorrectas = 0;

    function mostrarPregunta() {
        const preguntaActual = preguntas[respuestasCorrectas + respuestasIncorrectas];
        if (preguntaActual) {
            const respuestaUsuario = prompt(`Pregunta ${respuestasCorrectas + respuestasIncorrectas + 1}: ${preguntaActual.pregunta}`);

            if (respuestaUsuario === preguntaActual.respuesta) {
                respuestasCorrectas++;
            } else {
                respuestasIncorrectas++;
            }

            mostrarPregunta();
        } else {
            mostrarPuntuacion();
        }
    }

    function mostrarPuntuacion() {
        const puntuacionFinal = `Puntuación: ${respuestasCorrectas} de ${preguntas.length} respuestas correctas`;
        document.getElementById('puntuacion').textContent = puntuacionFinal;
    }

    mostrarPregunta();
});
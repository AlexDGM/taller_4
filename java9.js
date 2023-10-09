function calcularEstadisticas() {
    const calificacionesInput = document.getElementById('calificaciones').value;
    const calificaciones = calificacionesInput.split(',').map(Number);

    if (calificaciones.length === 0 || isNaN(calificaciones[0])) {
        alert('Por favor, ingrese calificaciones válidas.');
        return;
    }

    const sumaCalificaciones = calificaciones.reduce((total, calificacion) => total + calificacion, 0);
    const promedio = sumaCalificaciones / calificaciones.length;
    const calificacionMasAlta = Math.max(...calificaciones);
    const calificacionMasBaja = Math.min(...calificaciones);

    document.getElementById('promedio').textContent = promedio.toFixed(2);
    document.getElementById('maxima').textContent = calificacionMasAlta;
    document.getElementById('minima').textContent = calificacionMasBaja;
}
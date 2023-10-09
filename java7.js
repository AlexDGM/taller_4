function calcularInteresCompuesto() {
    const capitalInicial = parseFloat(document.getElementById('capitalInicial').value);
    const tasaInteres = parseFloat(document.getElementById('tasaInteres').value);
    const periodoInversion = parseInt(document.getElementById('periodoInversion').value);

    if (isNaN(capitalInicial) || isNaN(tasaInteres) || isNaN(periodoInversion)) {
        alert('Por favor, ingresa valores válidos.');
        return;
    }
    const tasaInteresDecimal = tasaInteres / 100;
    const montoFinal = capitalInicial * Math.pow(1 + tasaInteresDecimal, periodoInversion);

    document.getElementById('resultado').textContent = `Monto Final: $${montoFinal.toFixed(2)}`;
}
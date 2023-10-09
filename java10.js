function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    const imc = peso / (altura * altura);
    const categoria = determinarCategoriaIMC(imc);

    document.getElementById('imc').textContent = imc.toFixed(2);
    document.getElementById('categoria').textContent = categoria;
}

function determinarCategoriaIMC(imc) {
    if (imc < 18.5) {
        return 'Bajo Peso';
    } else if (imc < 24.9) {
        return 'Peso Normal';
    } else if (imc < 29.9) {
        return 'Sobrepeso';
    } else {
        return 'Obesidad';
    }
}
function calcular() {

    const listaNumerosInput = document.getElementById('listaNumeros').value;
    const listaNumeros = listaNumerosInput.split(',').map(num => parseFloat(num.trim()));

    if (isNaN(listaNumeros[0])) {
        alert('ingresa una lista válida de números separados por comas.');
        return;
    }

    const media = calcularMedia(listaNumeros);

   
    const mediana = calcularMediana(listaNumeros);

    
    const desviacion = calcularDesviacionEstandar(listaNumeros, media);

    document.getElementById('media').textContent = media.toFixed(2);
    document.getElementById('mediana').textContent = mediana.toFixed(2);
    document.getElementById('desviacion').textContent = desviacion.toFixed(2);
}

function calcularMedia(numeros) {
    const suma = numeros.reduce((total, numero) => total + numero, 0);
    return suma / numeros.length;
}

function calcularMediana(numeros) {
    const sortedNumeros = [...numeros].sort((a, b) => a - b);
    const middle = Math.floor(sortedNumeros.length / 2);

    if (sortedNumeros.length % 2 === 0) {
        return (sortedNumeros[middle - 1] + sortedNumeros[middle]) / 2;
    } else {
        return sortedNumeros[middle];
    }
}

function calcularDesviacionEstandar(numeros, media) {
    const sumatoriaCuadrados = numeros.reduce((total, numero) => total + Math.pow(numero - media, 2), 0);
    const varianza = sumatoriaCuadrados / numeros.length;
    return Math.sqrt(varianza);
}
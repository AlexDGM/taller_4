function generarTabla() {
    const numero = parseInt(document.getElementById('numero').value);
    const filas = parseInt(document.getElementById('filas').value);

    
    document.getElementById('tablaMultiplicar').innerHTML = '';

    const tabla = document.createElement('table');
    const encabezados = document.createElement('tr');
    encabezados.innerHTML = '<th>Número</th><th>Resultado</th>';
    tabla.appendChild(encabezados);

   
    for (let i = 1; i <= filas; i++) {
        const resultado = numero * i;
        const fila = document.createElement('tr');
        fila.innerHTML = `<td>${i}</td><td>${numero} x ${i} = ${resultado}</td>`;
        tabla.appendChild(fila);
    }

   
    document.getElementById('tablaMultiplicar').appendChild(tabla);
}
const libros = [];
    
function agregarLibro() {
    const titulo = document.getElementById('titulo').value;
    const autor = document.getElementById('autor').value;
    const anio = document.getElementById('anio').value;

    const libro = {
        titulo: titulo,
        autor: autor,
        anio: anio
    };

    libros.push(libro);

   
    document.getElementById('titulo').value = '';
    document.getElementById('autor').value = '';
    document.getElementById('anio').value = '';

    alert('Libro agregado con éxito.');
}

function buscarLibros() {
    const buscarTitulo = document.getElementById('buscarTitulo').value.toLowerCase();
    const buscarAutor = document.getElementById('buscarAutor').value.toLowerCase();

    const resultados = libros.filter(libro => {
        const titulo = libro.titulo.toLowerCase();
        const autor = libro.autor.toLowerCase();

        return (buscarTitulo === '' || titulo.includes(buscarTitulo)) &&
               (buscarAutor === '' || autor.includes(buscarAutor));
    });

    mostrarResultados(resultados);
}

function mostrarResultados(resultados) {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = '';

    if (resultados.length === 0) {
        resultadosDiv.innerHTML = '<p>No se encontraron resultados.</p>';
    } else {
        resultadosDiv.innerHTML = '<h3>Resultados de la Búsqueda</h3>';
        resultados.forEach(libro => {
            resultadosDiv.innerHTML += `
                <p><strong>Título:</strong> ${libro.titulo}</p>
                <p><strong>Autor:</strong> ${libro.autor}</p>
                <p><strong>Año de Publicación:</strong> ${libro.anio}</p>
                <hr>
            `;
        });
    }
}

const estudiantes = [];

function agregarEstudiante() {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const identificacion = document.getElementById('identificacion').value;

    const estudiante = {
        nombre: nombre,
        edad: edad,
        identificacion: identificacion
    };

    estudiantes.push(estudiante);

    
    document.getElementById('nombre').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('identificacion').value = '';

    alert('Estudiante registrado con éxito.');
}


function buscarEstudiante() {
    const buscarIdentificacion = document.getElementById('buscarIdentificacion').value;

    const estudianteEncontrado = estudiantes.find(estudiante => estudiante.identificacion === buscarIdentificacion);

    if (estudianteEncontrado) {
        document.getElementById('resultado').innerHTML = `
            <h3>Información del Estudiante</h3>
            <p><strong>Nombre:</strong> ${estudianteEncontrado.nombre}</p>
            <p><strong>Edad:</strong> ${estudianteEncontrado.edad}</p>
            <p><strong>Número de Identificación:</strong> ${estudianteEncontrado.identificacion}</p>
        `;
    } else {
        document.getElementById('resultado').innerHTML = '<p>Estudiante no encontrado.</p>';
    }
}

document.getElementById('registroEstudiante').addEventListener('submit', function (e) {
    e.preventDefault();
    agregarEstudiante();
});
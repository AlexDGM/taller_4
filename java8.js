const caracteresMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const caracteresMinusculas = 'abcdefghijklmnopqrstuvwxyz';
        const caracteresNumeros = '0123456789';
        const caracteresEspeciales = '!@#$%^&*()_+[]{}|;:,.<>?';

        function generarContraseña() {
            const longitud = parseInt(document.getElementById('longitud').value);
            const incluirMayusculas = document.getElementById('mayusculas').checked;
            const incluirMinusculas = document.getElementById('minusculas').checked;
            const incluirNumeros = document.getElementById('numeros').checked;
            const incluirEspeciales = document.getElementById('especiales').checked;

            if (!incluirMayusculas && !incluirMinusculas && !incluirNumeros && !incluirEspeciales) {
                alert('Por favor, selecciona al menos un tipo de carácter para incluir en la contraseña.');
                return;
            }

            let caracteresPermitidos = '';
            if (incluirMayusculas) caracteresPermitidos += caracteresMayusculas;
            if (incluirMinusculas) caracteresPermitidos += caracteresMinusculas;
            if (incluirNumeros) caracteresPermitidos += caracteresNumeros;
            if (incluirEspeciales) caracteresPermitidos += caracteresEspeciales;

            let contraseñaGenerada = '';
            for (let i = 0; i < longitud; i++) {
                const indice = Math.floor(Math.random() * caracteresPermitidos.length);
                contraseñaGenerada += caracteresPermitidos.charAt(indice);
            }

            document.getElementById('contraseñaGenerada').value = contraseñaGenerada;
        }
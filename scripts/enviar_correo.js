const formulario = document.querySelector('#form');
const correoInput = formulario.querySelector('#correo_recuperar');
const confirmarCorreoInput = formulario.querySelector('#correo_recuperar2'); // Cambiado a ID correcto

const validarCorreos = () => {
    if (correoInput.value === confirmarCorreoInput.value) {
        return true;
    } else {
        alert("Los correos no coinciden.");
        return false;
    }
};

const enviarFormulario = (event) => {
    event.preventDefault(); // Evita el envío del formulario por defecto

    if (validarCorreos()) {
        const data = {
            correo: correoInput.value,
        };

        // Llamada a la API para enviar el código
        fetch('http://localhost:3000/Users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la red'); // Manejo de errores HTTP
            }
            return response.json();
        })
        .then(json => {
            alert("Se ha enviado un código al correo.");
            console.log(json);
            formulario.reset(); // Resetea el formulario
        })
        .catch(err => {
            console.error("Error:", err);
            alert("No se pudo enviar el código.");
        });
    }
};

formulario.addEventListener('submit', enviarFormulario);

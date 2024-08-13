export const required = (event) => {
    // Captura todos los elementos requeridos en el contexto del formulario
    const requeridos = event.target.querySelectorAll("[required]");
    let isValid = true; // Variable para verificar la validez

    requeridos.forEach(elemento => {
        if (elemento.value.trim() === "") { // Verifica si el campo está vacío
            elemento.classList.remove("border-green-500", "border-2");
            elemento.classList.add("border-red-500", "border-2");
            isValid = false; // Cambia a false si hay un campo vacío
        } else {
            elemento.classList.remove("border-red-500", "border-2");
            elemento.classList.add("border-green-500", "border-2"); // Agrega la clase verde si no está vacío
        }
    });

    return isValid; // Devuelve true si todos los campos son válidos, de lo contrario false
};
export const required = (formulario) => {
    const requeridos = formulario.querySelectorAll("[required]");
    let isValid = true;
    console.log(requeridos);
    
    requeridos.forEach(elemento => {
        console.log(elemento);
        
        if (elemento.value.trim() === "") {
            elemento.classList.remove("border-green-500", "border-2");
            elemento.classList.add("border-red-500", "border-2");
            isValid = false;
        } else {
            elemento.classList.remove("border-red-500", "border-2");
            elemento.classList.add("border-green-500", "border-2");
        }
    });

    return isValid;
};








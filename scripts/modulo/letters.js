const letters = (event, elemento) => {
    let letras = /^[a-zA-ZÀ-ÿ\s]*$/;
    let spanExistente = elemento.parentElement.querySelector(".alertas");

    if (letras.test(event.key) && elemento.value.length <= 25) {
        elemento.classList.add("border-green-500", "border-2");
        elemento.classList.remove("border-red-500", "border-2");

        if (spanExistente) {
            elemento.parentElement.removeChild(spanExistente);
        }
    } else {
        elemento.classList.remove("border-green-500", "border-2");
        elemento.classList.add("border-red-500", "border-2");

        if (!spanExistente) {
            let span = document.createElement('span');
            span.textContent = "Debe ingresar solo letras y espacios";
            span.classList.add("text-red-500", "mt-2", "ml-auto", "alertas");
            elemento.parentElement.appendChild(span);
        }
        event.preventDefault();
    }
};

export default letters;
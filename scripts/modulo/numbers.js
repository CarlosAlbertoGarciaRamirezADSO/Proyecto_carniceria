let numeros = (event, elemento) => {
    let spanExistente = elemento.parentElement.querySelector("#alerta");

    let numeros = /^[0-9]*$/;
    if (numeros.test(event.key) && elemento.value.length <= 10) {
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
            span.textContent = "Debe ingresar solo números";
            span.classList.add("text-red-500", "mt-2", "ml-auto","alerts");
            span.setAttribute("id", "alerta");
            elemento.parentElement.appendChild(span);
        }
        event.preventDefault();
    }
}

export default numeros;
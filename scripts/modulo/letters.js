
const letters = (event,elemento) => {
    let letras = /^[a-zA-ZÀ-ÿ\s]*$/;    

    if (letras.test(event.key) && elemento.value.length <= 25) {
        elemento.classList.add("border-green-500", "border-2");
        elemento.classList.remove("border-red-500", "border-2");
    }else{
        elemento.classList.remove("border-green-500", "border-2");
        elemento.classList.add("border-red-500", "border-2");
        event.preventDefault()
    }
}
export default letters;
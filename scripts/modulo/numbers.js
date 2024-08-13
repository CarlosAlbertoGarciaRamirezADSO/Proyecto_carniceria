let numeros = (event,elemento)=>{
    let numeros = /^[0-9]*$/
    if(numeros.test(event.key) && elemento.value.length <=10 ){
            elemento.classList.add("border-green-500", "border-2");
            elemento.classList.remove("border-red-500", "border-2");
        }else {
            elemento.classList.remove("border-green-500", "border-2");
            elemento.classList.add("border-red-500", "border-2");
            event.preventDefault()
        }
    }

    export default numeros;

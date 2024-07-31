import { required } from "./modulo/valida_modal.js";
const dom = document;

const modal = dom.querySelector(".modal");
const agregar = dom.querySelector("#agregar")
const cerrar = dom.querySelector("#cerrar")
const formulario = dom.querySelector("#form_modal")

const input_id = dom.querySelector('#input_id');
const input_nombre = dom.querySelector('#input_nombre');
const input_fechavencimiento = dom.querySelector('#input_date').value;
const input_peso = dom.querySelector('#input_peso_gramos');
const input_precioXLibra = dom.querySelector('#input_precio_libra');
const boton_agregar_pd = dom.querySelector("#enviar_datos_agg")


let letras = (event,elemento) =>{
    let letras = /^[a-zA-Z]$/
    console.log(event.key);
    if (elemento.value == "") {
        elemento.classList.remove("border-green-500", "border-2");
        elemento.classList.add("border-red-500", "border-2");
    }
    if(letras.test(event.key)){
        elemento.classList.add("border-green-500", "border-2");
        elemento.classList.remove("border-red-500", "border-2");
    }else{
        event.preventDefault()
    }
}

let numeros = (event,elemento)=>{
    let numeros = /^[0-9]{0,12}$/

    if(numeros.test(event.key)){
            elemento.classList.add("border-green-500", "border-2");
            elemento.classList.remove("border-red-500", "border-2");
        }else if(elemento.value.length <10 ){
            elemento.classList.remove("border-green-500", "border-2");
            elemento.classList.add("border-red-500", "border-2");
            event.preventDefault()
            
        }


    if(elemento.value.length ===10){
        elemento.classList.remove("border-green-500", "border-2");
        elemento.classList.add("border-red-500", "border-2");
        event.preventDefault()
    }
}

let modalmostrar = ()=>{
    modal.classList.toggle("hidden")
    formulario.reset()
}


input_id.addEventListener("keypress",(event)=>{
    numeros(event,input_id)
})

input_nombre.addEventListener("keypress",(event)=>{
    letras(event,input_nombre)
})

input_peso.addEventListener("keypress",(event)=>{
    numeros(event,input_peso)
})

input_precioXLibra.addEventListener("keypress",(event)=>{
    numeros(event,input_precioXLibra)
})


boton_agregar_pd.addEventListener("click",(event)=>{
    required(event)
})
agregar.addEventListener("click",modalmostrar)
cerrar.addEventListener("click",modalmostrar)


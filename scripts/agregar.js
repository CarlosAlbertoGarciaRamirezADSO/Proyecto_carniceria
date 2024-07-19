const dom = document;

const modal = dom.querySelector(".modal");
const agregar = dom.querySelector("#agregar")
const cerrar = dom.querySelector("#cerrar")
const formulario = dom.querySelector("#form")



let modalmostrar = ()=>{
    modal.classList.toggle("hidden")
    formulario.reset()
}

agregar.addEventListener("click",modalmostrar)
cerrar.addEventListener("click",modalmostrar)


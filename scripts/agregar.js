import { required } from "./modulo/valida_modal.js";
import letters  from "./modulo/letters.js";
import numbers  from "./modulo/numbers.js";
import createRow  from "./crear_row.js";
import solicitud,{enviar}  from "./modulo/ajax.js";
import edit from "./editar_p.js";
import deleteData from "./delete_p.js";

const dom = document;
const modal = dom.querySelector(".modal");
const agregar = dom.querySelector("#agregar")
const cerrar = dom.querySelector("#cerrar")
const formulario = dom.querySelector("#form_modal")
const oculto = dom.querySelector("#user_oculto")
const input_id = dom.querySelector('#input_id');
const input_nombre = dom.querySelector('#input_nombre');
const input_peso = dom.querySelector('#input_peso_gramos');
const input_precioXLibra = dom.querySelector('#input_precio_libra');



const save = async (event) => {
    event.preventDefault(); 
    const formulario = document.getElementById('form_modal');
    let ok = required(formulario);
    const data = {
        id_producto: input_id.value.trim(),
        nombre_p: input_nombre.value.trim(),

        peso: input_peso.value,
        precio: input_precioXLibra.value,
    };


    if (ok) {
        if (oculto.value === '') {
            try {
                const response = await enviar("productos", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                });
    
                alert(`Producto creado con éxito`);
                resetForm();
                createRow(response)
            } catch (error) {
                console.error("Error al enviar los datos:", error);
                alert("Ocurrió un error al enviar los datos.");
            } 
        }
        else {
                // Actualizamos los datos
                data.id = oculto.value;
                enviar(`productos/${oculto.value}`, {
                    method: "PUT",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                    }).then((data) => {
                    // resetForm();
                    // modalmostrar()
                    editRow(data);
                    alert(`Usuario actualizado con éxtio`);
                    });
            }
        }
    };

const resetForm = () => {
    input_id.classList.remove("border-green-500", "border-2");
    input_nombre.classList.remove("border-green-500", "border-2");
    input_peso.classList.remove("border-green-500", "border-2");
    input_precioXLibra.classList.remove("border-green-500", "border-2");
    
    input_id.classList.remove("border-red-500", "border-2");
    input_nombre.classList.remove("border-red-500", "border-2");
    input_peso.classList.remove("border-red-500", "border-2");
    input_precioXLibra.classList.remove("border-red-500", "border-2");


    const alerta = dom.querySelectorAll(".alerts")
    console.log(alerta);
    
    alerta.forEach(element => {
        element.parentElement.removeChild(element);
    });

    oculto.value = '';
    input_id.value = '';
    input_nombre.value = '';
    input_peso.value = ''
    input_precioXLibra.value = '';
}


const editRow = (data) => {
    const {
    id,
    id_producto,
    nombre_p,
    peso,
    precio,
} = data

    const tr = document.querySelector(`#user_${id}`);  
    
    tr.querySelector(".id_producto").textContent = id_producto;  
    tr.querySelector(".nombre_producto").textContent = nombre_p;
    tr.querySelector(".peso_producto").textContent = peso;
    tr.querySelector(".precioXlibra").textContent = precio;
}

document.addEventListener("click", (e) => {
    let element = "";
    if (e.target.matches(".edit") || e.target.matches(".edit *")) {
    element = e.target.matches(".edit") ? e.target : e.target.parentNode;
    edit(e, element);
    modalmostrar()
    }
    if (e.target.matches(".delete") || e.target.matches(".delete *")) {
    element = e.target.matches(".delete") ? e.target : e.target.parentNode;
    deleteData(e, element);
    }
});



let modalmostrar = ()=>{
    modal.classList.toggle("hidden")
    resetForm()
}

input_id.addEventListener("keypress",(event)=>{
    numbers(event,input_id)
})


input_nombre.addEventListener("keypress",(event)=>{
    letters(event,input_nombre)
})
input_nombre.addEventListener("blur",(event)=>{
    letters(event,input_nombre)
})


input_peso.addEventListener("keypress",(event)=>{
    numbers(event,input_peso)
})

input_precioXLibra.addEventListener("keypress",(event)=>{
    numbers(event,input_precioXLibra)
})

formulario.addEventListener("submit", save)

agregar.addEventListener("click",modalmostrar)
cerrar.addEventListener("click",modalmostrar)

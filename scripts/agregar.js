import { required } from "./modulo/valida_modal.js";
import letters  from "./modulo/letters.js";
import numbers  from "./modulo/numbers.js";
import validar_fecha  from "./modulo/date.js";
import createRow  from "./crear_row.js";
import solicitud,{enviar}  from "./modulo/ajax.js";
const dom = document;

const modal = dom.querySelector(".modal");
const agregar = dom.querySelector("#agregar")
const cerrar = dom.querySelector("#cerrar")
const formulario = dom.querySelector("#form_modal")


const oculto = dom.querySelector("#user_oculto")
const input_id = dom.querySelector('#input_id');
const input_nombre = dom.querySelector('#input_nombre');
const input_fechavencimiento = dom.querySelector('#input_date');
const input_peso = dom.querySelector('#input_peso_gramos');
const input_precioXLibra = dom.querySelector('#input_precio_libra');
const boton_agregar_pd = dom.querySelector("#enviar_datos_agg")


const save = async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe por defecto
    console.log("Formulario enviado"); // Verifica si se llama a la función

    let ok = required(event, "form  [required]");
    console.log("Validación exitosa:", ok);

    const data = {
        id_producto: input_id.value.trim(),
        nombre_p: input_nombre.value.trim(),
        vencimiento: input_fechavencimiento.value.trim(),
        peso: input_peso.value,
        precio: input_precioXLibra.value,
    };

    console.log("Datos a enviar:", data); // Verifica los datos que se están enviando

    if (ok) {
        try {
            const response = await enviar("productos", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            });

            console.log("Respuesta del servidor:", response); // Verifica la respuesta
            alert(`Producto creado con éxito`);
            resetForm();
            createRow(data)
        } catch (error) {
            console.error("Error al enviar los datos:", error);
            alert("Ocurrió un error al enviar los datos.");
        }
    }
};

const resetForm = () => {
    input_id.classList.remove("border-green-500", "border-2");
    input_nombre.classList.remove("border-green-500", "border-2");
    input_fechavencimiento.classList.remove("border-green-500", "border-2");
    input_peso.classList.remove("border-green-500", "border-2");
    input_precioXLibra.classList.remove("border-green-500", "border-2");
    
    oculto.value = '';
    input_id.value = '';
    input_nombre.value = '';
    input_fechavencimiento.value = '';
    input_peso.value = ''
    input_precioXLibra.value = '';
}


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

input_fechavencimiento.addEventListener("blur",(event)=>{
    validar_fecha(event,input_fechavencimiento)
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

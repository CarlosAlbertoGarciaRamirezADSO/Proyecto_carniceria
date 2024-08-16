
// const dom = document;
// const modal = dom.querySelector(".modal");
// const agregar = dom.querySelector("#agregar")
// const cerrar = dom.querySelector("#cerrar")
// const formulario = dom.querySelector("#form_modal")
// const oculto = dom.querySelector("#user_oculto")
// const input_id = dom.querySelector('#input_id');
// const input_nombre = dom.querySelector('#input_nombre');

// const save = async (event) => {
//     event.preventDefault(); 
//     let ok = required(formulario);
//     const data = {
//         id_rol: input_id.value.trim(),
//         nombre_rol: input_nombre.value.trim(),
//     };

//     if (ok) {
//         if (oculto.value === '') {
//             try {
//                 const response = await enviar("roles", {
//                     method: "POST",
//                     body: JSON.stringify(data),
//                     headers: {
//                         "Content-type": "application/json; charset=UTF-8",
//                     },
//                 });

//                 alert(`Rol creado con éxito`);
//                 resetForm();
//                 createRow(response)
//             } catch (error) {
//                 console.error("Error al enviar los datos:", error);
//                 alert("Ocurrió un error al enviar los datos.");
//             } 
//         }
//         else {
//             // Actualizamos los datos
//             data.id = oculto.value;
//             enviar(`roles/${oculto.value}`, {
//                 method: "PUT",
//                 body: JSON.stringify(data),
//                 headers: {
//                     "Content-type": "application/json; charset=UTF-8",
//                 },
//             }).then((data) => {
//                 editRow(data);
//                 alert(`Rol actualizado con éxito`);
//             });
//         }
//     }
// };

// const resetForm = () => {
//     input_id.classList.remove("border-green-500", "border-2");
//     input_nombre.classList.remove("border-green-500", "border-2");

//     input_id.classList.remove("border-red-500", "border-2");
//     input_nombre.classList.remove("border-red-500", "border-2");

//     const alerta = dom.querySelectorAll(".alerts");
//     alerta.forEach(element => {
//         element.parentElement.removeChild(element);
//     });

//     oculto.value = '';
//     input_id.value = '';
//     input_nombre.value = '';
// }

// const editRow = (data) => {
//     const { id, id_rol, nombre_rol } = data;

//     const tr = document.querySelector(`#user_${id}`);
//     tr.querySelector(".id_rol").textContent = id_rol;
//     tr.querySelector(".nombre_rol").textContent = nombre_rol;
// }

// document.addEventListener("click", (e) => {
//     let element = "";
//     if (e.target.matches(".edit") || e.target.matches(".edit *")) {
//         element = e.target.matches(".edit") ? e.target : e.target.parentNode;
//         edit(e, element);
//         modalmostrar();
//     }
//     if (e.target.matches(".delete") || e.target.matches(".delete *")) {
//         element = e.target.matches(".delete") ? e.target : e.target.parentNode;
//         deleteData(e, element);
//     }
// });

// let modalmostrar = () => {
//     modal.classList.toggle("hidden");
//     resetForm();
// }

// input_id.addEventListener("keypress", (event) => {
//     letters(event, input_id);
// });

// input_nombre.addEventListener("keypress", (event) => {
    //     letters(event, input_nombre);
    // });
    
    // formulario.addEventListener("submit", save);
    
    // agregar.addEventListener("click", modalmostrar);
    // cerrar.addEventListener("click", modalmostrar);
    
    

// import { required } from "./modulo/valida_modal.js";
// import letters from "./modulo/letters.js";
// import createRow from "./crear_row_roles.js";
// import deleteData from "./delete_rol.js";



import solicitud, { enviar } from "./modulo/ajax.js";
import edit from "./editar_rol.js";

const oculto_rol = document.querySelector("#user_oculto_edit")
const modal = document.querySelector('.modal');
const cerrar_modal = document.querySelector("#cerrar_modal")
const input_nombre = document.querySelector('#edit_nombre');
const input_contraseña = document.querySelector('#edit_contraseña');
const input_rol = document.querySelector('#edit_rol');
const formulario = document.querySelector("#form_modal_edit")

function cerrarModalEditar() {
    modal.classList.toggle('hidden');
}

const save_usuario = async (event) => {
    event.preventDefault(); // Asegúrate de evitar el comportamiento predeterminado del formulario

    const data = {
        id: oculto_rol.value.trim(),
        correo: input_nombre.value.trim(),
        contraseña: input_contraseña.value.trim(),
        rol: input_rol.value.trim()
    };

    console.log("Datos a enviar:", data); // Verifica los datos aquí

    if (data.id) {
        try {
            await enviar(`Users/${data.id}`, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }).then((response) => {
                console.log("Respuesta del servidor:", response); // Verifica la respuesta aquí
                editRow(response);
                alert("Usuario actualizado con éxito");
                cerrarModalEditar();
            });
        } catch (error) {
            console.error("Error al actualizar el usuario:", error);
            alert("Ocurrió un error al actualizar el usuario.");
        }
    } else {
        alert("ID del usuario no está definido.");
    }
};

const editRow = (data) => {
    const {
    id,
    correo,
    contraseña,
    rol,
    
} = data


const tr = document.querySelector(`.tr_prin[data-id='user_${id}']`);
    tr.querySelector(".nombre_usuario").textContent = correo;  
    tr.querySelector(".contraseña").textContent = contraseña;
    tr.querySelector(".rol").textContent = rol;
}

document.addEventListener("click", (e) => {
    let element = "";
    if (e.target.matches(".edit") || e.target.matches(".edit *")) {
        element = e.target.matches(".edit") ? e.target : e.target.parentNode;
    edit(e, element);
    cerrarModalEditar()
    }
    if (e.target.matches(".delete") || e.target.matches(".delete *")) {
    element = e.target.matches(".delete") ? e.target : e.target.parentNode;
    // deleteData(e, element);
    }
});


cerrar_modal.addEventListener("click",cerrarModalEditar)
formulario.addEventListener("submit",save_usuario)
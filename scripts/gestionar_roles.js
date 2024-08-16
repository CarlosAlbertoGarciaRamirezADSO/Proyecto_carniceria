

import solicitud, { enviar } from "./modulo/ajax.js";
import edit from "./editar_rol.js";
import deleteRol from "./delete_rol.js";

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


const rol_texto = (rol) => {
    switch (rol) {
        case 1:
            return "SUPER ADMIN";
        case 2:
            return "EMPLEADO";
        case 3:
            return "PENDIENTE";
        default:
            return rol;
    }
}

const editRow = (data) => {
    const {
        id,
        correo,
        contraseña,
        rol,
    } = data;

    const tr = document.querySelector(`.tr_prin[data-id='user_${id}']`);
    tr.querySelector(".nombre_usuario").textContent = correo;
    tr.querySelector(".contraseña").textContent = contraseña;

    // Convierte el rol a texto antes de asignarlo
    tr.querySelector(".rol").textContent = rol_texto(parseInt(rol, 10));
}

document.addEventListener("click", (e) => {
    let element = "";
    if (e.target.matches(".edit") || e.target.matches(".edit *")) {
        element = e.target.matches(".edit") ? e.target : e.target.parentNode;
        edit(e, element);
        cerrarModalEditar();
    }
    if (e.target.matches(".delete") || e.target.matches(".delete *")) {
        element = e.target.matches(".delete") ? e.target : e.target.parentNode;
        deleteRol(e, element);
    }
});


cerrar_modal.addEventListener("click", cerrarModalEditar)
formulario.addEventListener("submit", save_usuario)
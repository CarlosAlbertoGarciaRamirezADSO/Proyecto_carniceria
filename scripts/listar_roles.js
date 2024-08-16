// import  solicitud  from "./modulo/ajax.js";

// const fragmento = document.createDocumentFragment();
// const table = document.querySelector("#table");
// const tbody = document.querySelector("#tbody_roles");
// const $template = document.getElementById("users").content;
// const user = document.querySelector('#user_id');


// const listar_roles = async () => {  

//     const data = await solicitud('Users');

//     data.forEach((element) => {
//     $template.querySelector("tr").id = `user_${element.id}`;
//     $template.querySelector(".nombre_usuario").textContent = element.correo;
//     $template.querySelector(".contraseña").textContent = element.contraseña;
//     $template.querySelector(".rol").textContent = element.rol;

//     $template.querySelector(".edit").setAttribute("data-id", element.id);
//     $template.querySelector(".delete").setAttribute("data-id", element.id);

//     let clone = document.importNode($template, true);
//     fragmento.appendChild(clone);
//     }); 
//     tbody.appendChild(fragmento)
// }

// // Llama a listar cuando el DOM esté completamente cargado
// document.addEventListener("DOMContentLoaded", () => {
//     listar_roles(); // Llama a la función listar al cargar la página
// });

import solicitud from "./modulo/ajax.js";

const fragmento = document.createDocumentFragment();
const tbody = document.querySelector("#tbody_roles");
const $template = document.getElementById("users").content;

const listar_roles = async () => {
    try {
        const data = await solicitud('Users');

        data.forEach((element) => {
            // Clonar el template
            const clone = document.importNode($template, true);

            // Configurar los datos en el template clonado
            clone.querySelector(".nombre_usuario").textContent = element.correo;
            clone.querySelector(".contraseña").textContent = element.contraseña;
            clone.querySelector(".rol").textContent = element.rol;
            clone.querySelector(".tr_prin").setAttribute("data-id",`user_${element.id}`);

            // Configurar los botones de editar y eliminar
            clone.querySelector(".edit").setAttribute("data-id", element.id);
            clone.querySelector(".delete").setAttribute("data-id", element.id);

            // Añadir el clonado al fragmento
            fragmento.appendChild(clone);
        });

        // Añadir el fragmento al tbody
        tbody.appendChild(fragmento);
        
    } catch (error) {
        console.error("Error al listar roles:", error);
        alert("Ocurrió un error al cargar los roles.");
    }
};

// Llama a listar cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", listar_roles);
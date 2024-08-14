import  solicitud  from "./modulo/ajax.js";

const fragmento = document.createDocumentFragment();
const table = document.querySelector("#table");
const tbody = document.querySelector("#tbody");
const $template = document.getElementById("users").content;
const user = document.querySelector('#user_id');


const listar = async () => {  

    const data = await solicitud('productos');

    data.forEach((element) => {
    $template.querySelector("tr").id = `user_${element.id}`;
    $template.querySelector(".id_producto").textContent = element.id_producto;
    $template.querySelector(".nombre_producto").textContent = element.nombre_p;
    $template.querySelector(".peso_producto").textContent = element.peso;
    $template.querySelector(".precioXlibra").textContent = element.precio;

    $template.querySelector(".edit").setAttribute("data-id", element.id);
    $template.querySelector(".delete").setAttribute("data-id", element.id);

    let clone = document.importNode($template, true);
    fragmento.appendChild(clone);
    }); 
    tbody.appendChild(fragmento)
}

// Llama a listar cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    listar(); // Llama a la función listar al cargar la página
});


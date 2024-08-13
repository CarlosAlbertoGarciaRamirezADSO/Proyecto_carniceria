let icon = document.querySelector("#iconmenu");
let menu = document.querySelector("#menu");
menu.classList.add("max-md:hidden")

document.addEventListener("DOMContentLoaded", function() {
    validarSesion();
});

let noMenu = ()=>{
    menu.classList.toggle("max-md:hidden")

}
icon.addEventListener("click", noMenu)



//Control de las secciones
const validarSesion = () => {
    const usuarioActivo = localStorage.getItem("usuarioActivo");

    if (!usuarioActivo) {
        // Redirigir al login si no hay sesión activa
        window.location.href = "../index.html";
    } else {
        // Si hay sesión activa, convertir el string almacenado a un objeto
        const usuario = JSON.parse(usuarioActivo);
        console.log(usuario.id);
    }
};
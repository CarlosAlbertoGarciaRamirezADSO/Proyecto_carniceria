let icon = document.querySelector("#iconmenu");
let menu = document.querySelector("#menu");


let mostrarMenu = ()=>{
    menu.classList.toggle("hidden")
}

icon.addEventListener("click", mostrarMenu)

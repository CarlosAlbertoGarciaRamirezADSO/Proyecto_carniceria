let icon = document.querySelector("#iconmenu");
let menu = document.querySelector("#menu");
menu.classList.add("max-md:hidden")


let noMenu = ()=>{
    menu.classList.toggle("max-md:hidden")

}
icon.addEventListener("click", noMenu)

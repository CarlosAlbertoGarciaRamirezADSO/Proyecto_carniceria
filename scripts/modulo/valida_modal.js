let dom = document;
let require = dom.querySelectorAll("[required]")

console.log("required",require);

export let required =function hola() {   
    require.forEach(elemento =>{
        if (elemento.value === "") {
            elemento.classList.remove("border-green-500", "border-2");
            elemento.classList.add("border-red-500", "border-2");    
        }
    })
}
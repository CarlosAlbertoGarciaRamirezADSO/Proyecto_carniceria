import solicitud from "./modulo/ajax.js";

const fragmento = document.createDocumentFragment();
const template = document.getElementById("empledos_adm").content;
const tbody = document.getElementById("tbody_empleados")
const listar_historial = async () => {  
    const data = await solicitud('Users');
    
    data.forEach((element) => {
        
        // console.log(element);
        const clone = document.importNode(template, true);
        
        clone.querySelector(".id_em").textContent = element.id;
        clone.querySelector(".nombre_usuario").textContent = element.correo;
        clone.querySelector(".contraseña").textContent = element.contraseña;
        clone.querySelector(".rol").textContent = element.rol;
        clone.querySelector(".tr_prin").setAttribute("data-id",`user_${element.id}`);
        
        clone.querySelector(".delete").setAttribute("data-id", element.id);
        
        // Añadir el clonado al fragmento
        fragmento.appendChild(clone);
    }); 
    tbody.appendChild(fragmento);

    const detalles = document.querySelectorAll("#detalles");
    console.log(detalles);

    detalles.forEach((e) => {
        e.addEventListener("click", async () => {
            const _section = document.createElement("section");
            const div = document.createElement("div");

            let xde = await solicitud("venta");

            console.log(datos);
            

            _section.appendChild(div)
            console.log(e.getAttribute("data-id"))
        })
    })
};


document.addEventListener("DOMContentLoaded", () => {
    listar_historial();
    
    // tbody.addEventListener("click", (event) => {
    //     if (event.target.closest('.mostrar')) {
    //         const idVenta = event.target.closest('.mostrar').getAttribute('data-id');
    //         cargaproductosmodal(idVenta);
    //     }
    // });
    
});

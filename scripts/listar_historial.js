import solicitud from "./modulo/ajax.js";

const fragmento = document.createDocumentFragment();
const tbody = document.querySelector("#tbody_historial");
const $template = document.getElementById("historial_p").content;

const listar_historial = async () => {  
    const data = await solicitud('venta');

    data.forEach((element) => {
        
        let producto = element.productos
        console.log(producto);

        producto.forEach(total => {
            console.log(total);
            $template.querySelector(".total_f").textContent = total.total_factura; 
        });
        
        $template.querySelector("tr").id = `venta_${element.id}`;
        $template.querySelector(".id_venta").textContent = element.id;  
        $template.querySelector(".mostrar").setAttribute("data-id", element.id);

        let clone = document.importNode($template, true);
        fragmento.appendChild(clone);
    }); 

    tbody.appendChild(fragmento);
};

document.addEventListener("DOMContentLoaded", () => {
    listar_historial();

    tbody.addEventListener("click", (event) => {
        if (event.target.closest('.mostrar')) {
            const idVenta = event.target.closest('.mostrar').getAttribute('data-id');
            cargaproductosmodal(idVenta);
        }
    });
});

const cargaproductosmodal = async (idVenta) => {
    const data = await solicitud(`venta/${idVenta}`); // Obtiene los productos de la venta por ID
    const productos = data.productos;
    mostrarmodal(productos);
};

const mostrarmodal = (productos) => {
    const modal = document.getElementById('modalProductos');
    const listaproductos = document.getElementById('listaProductos');

    listaproductos.innerHTML = '';

    productos.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre_p_fk} - ${producto.peso_v} lbs - $${producto.total_producto}`;
        listaproductos.appendChild(li);
    });

    modal.classList.remove('hidden');

    document.getElementById('cerrarModal').addEventListener('click', () => {
        modal.classList.add('hidden');
    });
};




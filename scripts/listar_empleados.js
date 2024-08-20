import solicitud from "./modulo/ajax.js";

const fragmento = document.createDocumentFragment();
const template = document.getElementById("empledos_adm").content;
const tbody = document.getElementById("tbody_empleados");

// Función para mostrar los productos en el modal
const mostrarProductos = (productos) => {
    const modal = document.getElementById("modal_empleados");
    const listaProductos = document.getElementById("listaProductos");

    // Limpiar contenido anterior
    listaProductos.innerHTML = "";

    productos.forEach((producto) => {
        const li = document.createElement("li");
        li.classList.add("border-b", "pb-2", "mb-2");

        const idProducto = document.createElement("p");
        idProducto.textContent = `ID Producto: ${producto.id_producto_fk}`;
        
        const nombreProducto = document.createElement("p");
        nombreProducto.textContent = `Nombre Producto: ${producto.nombre_p_fk}`;
        
        const peso = document.createElement("p");
        peso.textContent = `Peso: ${producto.peso_v}`;
        
        const precioXlibra = document.createElement("p");
        precioXlibra.textContent = `Precio por Libra: ${producto.precioXlibra_fk}`;
        
        const totalFactura = document.createElement("p");
        totalFactura.textContent = `Total Factura: ${producto.total_factura}`;
        
        const totalProducto = document.createElement("p");
        totalProducto.textContent = `Total Producto: ${producto.total_producto}`;
        
        li.appendChild(idProducto);
        li.appendChild(nombreProducto);
        li.appendChild(peso);
        li.appendChild(precioXlibra);
        li.appendChild(totalFactura);
        li.appendChild(totalProducto);

        listaProductos.appendChild(li);
    });

    modal.classList.remove("hidden");
};

// Función para ocultar el modal
const ocultarModal = () => {
    const modal = document.getElementById("modal_empleados");
    modal.classList.add("hidden");
};

const listar_historial = async () => {  
    const empleados = await solicitud('Users');
    const ventas = await solicitud('venta');  // Obtener todas las ventas
    
    empleados.forEach((element) => {
        
        
        if (element.rol !=1 && element.rol !=3) {
            
            let rol = ""
            if (element.rol == 2) {
                rol = "EMPLEADO"     
            }
    
                console.log(rol);
            const clone = document.importNode(template, true);
            
            clone.querySelector(".id_em").textContent = element.id;
            clone.querySelector(".nombre_usuario").textContent = element.correo;
            clone.querySelector(".contraseña").textContent = element.contraseña;
            clone.querySelector(".rol").textContent = rol;
            clone.querySelector(".tr_prin").setAttribute("data-id", `user_${element.id}`);
            
            // Asegúrate de que estás buscando la clase correcta
            clone.querySelector(".detalles").setAttribute("data-id", element.id);
            
            fragmento.appendChild(clone);
        }
    }); 
    tbody.appendChild(fragmento);

    const detalles = document.querySelectorAll(".detalles"); 
    detalles.forEach((e) => {
        e.addEventListener("click", () => {
            const empleadoId = e.getAttribute("data-id").replace('user_', '');
            
            const productosFiltrados = ventas.flatMap(venta => 
                venta.productos.filter(producto => producto.id_empleado === empleadoId)
            );

            // Mostrar los productos en el modal
            mostrarProductos(productosFiltrados);

            console.log(empleadoId);
        });
    });

    // Manejar el evento de cierre del modal
    const cerrar = document.getElementById("cerrarModal");
    if (cerrar) {
        cerrar.addEventListener("click", ocultarModal);
    }
};

document.addEventListener("DOMContentLoaded", listar_historial);

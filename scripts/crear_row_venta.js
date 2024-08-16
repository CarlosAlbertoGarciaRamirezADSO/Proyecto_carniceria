const createRow_venta = (data) => {
    const tbody = document.querySelector("#tbody_venta");

    const tr = tbody.insertRow(-1);  
    
    const tdId = tr.insertCell(0);
    const tdNombre = tr.insertCell(1);
    const tdPeso = tr.insertCell(2);
    const tdPrecio = tr.insertCell(3);
    const tdTotal = tr.insertCell(4);
    const tdEliminar = tr.insertCell(5);  

    tdId.classList.add("p-3", "border", "border-gray-300");
    tdNombre.classList.add("p-3", "border", "border-gray-300");
    tdPeso.classList.add("p-3", "border", "border-gray-300");
    tdPrecio.classList.add("p-3", "border", "border-gray-300");
    tdTotal.classList.add("p-3", "border", "border-gray-300");
    tdEliminar.classList.add("p-3", "border", "border-gray-300");

    tdId.textContent = data.id_producto;
    tdNombre.textContent = data.nombre_p;
    tdPeso.textContent = data.peso;
    tdPrecio.textContent = data.precio;

    const pesoEnLibras = parseFloat(data.peso) / 500; 
    const total = pesoEnLibras * parseFloat(data.precio);
    tdTotal.textContent = `${total}`;

    const btnDelete = document.createElement("button");
    btnDelete.classList.add("delete", "text-red-500", "text-2xl");
    btnDelete.setAttribute("data-id", data.id_producto);
    btnDelete.innerHTML = `<i class="bx bxs-trash"></i>`; 

    tdEliminar.appendChild(btnDelete);


    btnDelete.addEventListener("click", () => {
        tbody.removeChild(tr); 
    });

    tr.id = `producto_${data.id_producto}`; 
}

export default createRow_venta;
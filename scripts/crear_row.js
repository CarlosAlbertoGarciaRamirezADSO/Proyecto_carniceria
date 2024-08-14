
const tbody = document.querySelector("#tbody");

const createRow = (data) => {
    console.log(data);
    console.log(data.id);
    
    const tr = tbody.insertRow(-1);  
    const tdId = tr.insertCell(0);
    const tdNombre = tr.insertCell(1);
    const td_peso_producto = tr.insertCell(2);
    const tdPrecioXlibra = tr.insertCell(3);
    const tdbotonera = tr.insertCell(4);

    tdId.classList.add("id_producto", "p-3", "border", "border-gray-300");
    tdNombre.classList.add("nombre_producto", "p-3", "border", "border-gray-300");

    td_peso_producto.classList.add("peso_producto", "p-3", "border", "border-gray-300");
    tdPrecioXlibra.classList.add("p-3", "border", "border-gray-300");
    tdbotonera.classList.add("p-3", "border", "border-gray-300");
    
    tdId.textContent = data.id_producto;
    tdNombre.textContent = data.nombre_p;
    td_peso_producto.textContent = data.peso;
    tdPrecioXlibra.textContent = data.precio;

    const div = document.createElement("div");
    const btnEdit = document.createElement("button");
    const btnDelete = document.createElement("button");
    const iconEdit = document.createElement("i");
    const iconDelete = document.createElement("i");

    div.classList.add("group");
    btnDelete.classList.add("delete", "text-red-500", "text-2xl");
    btnEdit.classList.add("edit", "text-green-500", "text-2xl");
    iconEdit.classList.add("bx", "bxs-edit-alt");
    iconDelete.classList.add("bx", "bxs-trash");

    btnEdit.setAttribute("data-id", data.id);
    btnDelete.setAttribute("data-id", data.id);

    btnEdit.appendChild(iconEdit);
    btnDelete.appendChild(iconDelete);

    div.appendChild(btnEdit);
    div.appendChild(btnDelete);

    tdbotonera.appendChild(div);

    tr.id = `user_${data.id}`; 
}

export default createRow
import {enviar} from "./modulo/ajax.js";

const deleteData = (event, element) => {
    const tr = element.parentNode.parentNode.parentNode;
    if (confirm("¿Desea eliminar el registro?")) {
    enviar(`productos/${element.dataset.id}`, {
        method: "DELETE",
        headers: {
        "Content-type": "application/json; charset=UTF-8",
        },
    }).then((data) => {
        alert(`El producto ${data.nombre_p} fue eliminado con exito`);
        tr.remove();
    });
    }
};

export default deleteData
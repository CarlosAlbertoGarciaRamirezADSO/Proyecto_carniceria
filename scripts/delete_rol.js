import { enviar } from "./modulo/ajax.js";

const deleteRol = (event, element) => {
    const tr = element.parentNode.parentNode.parentNode;
    if (confirm("¿Desea eliminar este rol?")) {
        enviar(`Users/${element.dataset.id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        }).then((data) => {
            alert(`El rol ${data.nombre} fue eliminado con éxito`);
            tr.remove();
        }).catch((error) => {
            console.error("Error al eliminar el rol:", error);
            alert("Ocurrió un error al eliminar el rol.");
        });
    }
};

export default deleteRol;

import {enviar} from "./modulo/ajax.js";
import loadForm from "./modulo/loadForm.js";
const edit = (event, element) => {   
    enviar(`productos/${element.dataset.id}`, {
    method: "PATCH",
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
    }).then((data) => {
    // console.log(data);
    loadForm(data)
    });
}

export default edit
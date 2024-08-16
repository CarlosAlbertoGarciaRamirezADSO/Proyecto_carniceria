import {enviar} from "./modulo/ajax.js";
import loadForm_roles from "./load_roles.js";
const edit = (event, element) => {   
    enviar(`Users/${element.dataset.id}`, {
    method: "PATCH",
    headers: {
        "Content-type": "application/json; charset=UTF-8",
    },
    }).then((data) => {
    // console.log(data);
    console.log(data);
    
    loadForm_roles(data)
    });
}

export default edit
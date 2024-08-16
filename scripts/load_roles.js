const dom = document;

const oculto = dom.querySelector("#user_oculto_edit")
const input_nombre = dom.querySelector('#edit_nombre');
const input_contraseña = dom.querySelector('#edit_contraseña');

const input_rol = dom.querySelector('#edit_rol');



const loadForm_roles = (data) => {
    console.log(data);
    const {id,correo,contraseña, rol} = data;
    oculto.value = id;
    input_nombre.value = correo;
    input_contraseña.value = contraseña;
    input_rol.value = rol;
}

export default loadForm_roles

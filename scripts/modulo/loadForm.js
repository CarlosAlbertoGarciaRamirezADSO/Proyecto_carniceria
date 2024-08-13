const dom = document;

const oculto = dom.querySelector("#user_oculto")
const input_id = dom.querySelector('#input_id');
const input_nombre = dom.querySelector('#input_nombre');
const input_fechavencimiento = dom.querySelector('#input_date');
const input_peso = dom.querySelector('#input_peso_gramos');
const input_precioXLibra = dom.querySelector('#input_precio_libra');


const loadForm = (data) => {
    const {id,id_producto,nombre_p,vencimiento, peso,precio} = data;
    oculto.value = id;
    input_id.value = id_producto;
    input_nombre.value = nombre_p;
    input_fechavencimiento.value = vencimiento
    input_peso.value = peso;
    input_precioXLibra.value = precio;
}

export default loadForm

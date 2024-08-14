import { required } from "./modulo/valida_modal.js";
import solicitud from "./modulo/ajax.js";
import numeros from "./modulo/numbers.js";
import letters from "./modulo/letters.js";

let input_nombre_buscar = document.querySelector("#product_name");
let boton_agg_venta = document.querySelector("#agregar_venta");
let id_producto = document.querySelector("#id_pro");
let precioXlibra = document.querySelector("#precio_libra");
let peso_ingresado = document.querySelector("#peso_pedido");

const buscar_producto = async (event) => {
    event.preventDefault();

    let verificar = required(event, "form [required]");

    if (verificar) {
        const data = await solicitud('productos');
        console.log(data);

        const producto = data.find(element => element.nombre_p === input_nombre_buscar.value);

        if (producto) {
            id_producto.value = producto.id_producto;
            precioXlibra.value = producto.precio;

            if (precioXlibra.value !== "") {  // Verifica que el precio esté disponible
                const pesoEnGramos = parseFloat(peso_ingresado.value);
                const precioPorLibra = parseFloat(precioXlibra.value);
                
                if (!isNaN(pesoEnGramos) && pesoEnGramos > 0) {  // Verifica que se haya ingresado un peso válido
                    const pesoEnLibras = pesoEnGramos / 500;  // Convertir gramos a libras
                    const total = pesoEnLibras * precioPorLibra;

                    console.log(`Total a pagar: $${total.toFixed(2)}`);
                    alert(`Total a pagar: $${total.toFixed(2)}`);
                } else {
                    alert("Debe ingresar un peso válido en gramos");
                }
            } else {
                alert("Debe ingresar el precio por libra");
            }
        } else {
            alert("Producto no encontrado");
        }
    }
}

input_nombre_buscar.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        buscar_producto(event);
    }
});

input_nombre_buscar.addEventListener("keypress", (event) => {
    letters(event, input_nombre_buscar)
    
})

peso_ingresado.addEventListener("keypress",(event)=>{
    numeros(event,peso_ingresado)
})

boton_agg_venta.addEventListener("click", buscar_producto);
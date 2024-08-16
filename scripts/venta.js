import { required } from "./modulo/valida_modal.js";
import solicitud from "./modulo/ajax.js";
import numeros from "./modulo/numbers.js";
import letters from "./modulo/letters.js";
import createRow_venta from "./crear_row_venta.js";
import finalizarventa from "./generar_venta.js";

let input_nombre_buscar = document.querySelector("#product_name");
let boton_agg_venta = document.querySelector("#agregar_venta");
let peso_ingresado = document.querySelector("#peso_pedido");

const buscar_producto = async (event) => {
    event.preventDefault();

    const formulario = document.getElementById('productoForm');
    let verificar = required(formulario);
    
    if (verificar) {
        const data = await solicitud('productos');

        const producto = data.find(element => element.nombre_p === input_nombre_buscar.value);

        if (producto) {
            const pesoEnGramos = parseFloat(peso_ingresado.value);
            const precioPorLibra = parseFloat(producto.precio);
            
            if (!isNaN(pesoEnGramos) && pesoEnGramos > 0) {
                const pesoEnLibras = pesoEnGramos / 500;  // Convertir gramos a libras
                const total = pesoEnLibras * precioPorLibra;

                // Crear un objeto con los datos necesarios para la fila
                const dataRow = {
                    id_producto: producto.id_producto,
                    nombre_p: producto.nombre_p,
                    peso: peso_ingresado.value,
                    precio: producto.precio
                };

                // Llamar a la función para agregar una fila en la tabla
                createRow_venta(dataRow);
            } else {
                alert("Debe ingresar un peso válido en gramos");
            }
        } else {
            alert("Producto no encontrado");
        }
    }
}

// Validar solo letras en el input del nombre del producto
input_nombre_buscar.addEventListener("keypress", (event) => {
    letters(event, input_nombre_buscar);
});

// Validar solo números en el input del peso
peso_ingresado.addEventListener("keypress", (event) => {
    numeros(event, peso_ingresado);
});

// Buscar el producto y agregar una fila al hacer clic en el botón
boton_agg_venta.addEventListener("click", buscar_producto);

document.addEventListener("DOMContentLoaded", () => {
    const finalizarBtn = document.querySelector("#finalizar_venta");
    if (finalizarBtn) {
        finalizarBtn.addEventListener("click", finalizarventa);
    }
});
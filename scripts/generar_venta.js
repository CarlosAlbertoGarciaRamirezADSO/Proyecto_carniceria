import solicitud, { enviar } from "./modulo/ajax.js";
import validarSesion from "./menu.js";

const finalizarventa = async () => {
    const tbody = document.querySelector("#tbody_venta");
    const rows = tbody.querySelectorAll("tr");

    if (rows.length === 0) {
        alert("No hay productos aún en la tabla.");
        return;
    }

    let totalVenta = 0;
    const ventas = [];

    // Obtener todos los productos desde el servidor
    const productos = await solicitud('productos');

    for (const fila of rows) {
        const id_p = fila.querySelector("td:nth-child(1)").textContent.trim();
        const nombre_producto = fila.querySelector("td:nth-child(2)").textContent.trim();
        const peso_venta = parseFloat(fila.querySelector("td:nth-child(3)").textContent.trim());
        const precio_libra = parseFloat(fila.querySelector("td:nth-child(4)").textContent.trim());
        const precio_total_pro = parseFloat(fila.querySelector("td:nth-child(5)").textContent.trim());

        totalVenta += precio_total_pro;

        const producto = productos.find(element => element.id_producto === id_p);

        if (!producto) {
            alert(`Producto con ID ${id_p} no encontrado.`);
            return;
        }
        const nuevoStock = producto.peso - peso_venta;

        if (nuevoStock < 0) {
            alert(`El stock para el producto ${producto.nombre_p} es insuficiente.`);
            return;
        }

        // Agregar la venta al array de ventas
        ventas.push({
            id_producto_fk: id_p,
            nombre_p_fk: nombre_producto,
            peso_v: peso_venta,
            precioXlibra_fk: precio_libra,
            total_producto: precio_total_pro,
            total_factura: totalVenta,
            id_empleado: validarSesion()
        });

        // Actualizar el stock
        try {
            await enviar(`productos/${producto.id}`, {
                method: "PATCH",
                body: JSON.stringify({ peso: nuevoStock }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                }
            });
        } catch (error) {
            console.error("Error al actualizar el stock:", error);
            alert("Ocurrió un error al actualizar el stock.");
            return;
        }
    }

    console.log(ventas);

    const data = {
        productos: ventas,
    };

    alert(`El total de la venta es: $${totalVenta}`);

    tbody.innerHTML = '';

    try {
        const respuesta = await enviar("venta", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        });
        console.log(respuesta.productos);

        if (respuesta.productos) {
            alert("Venta registrada con éxito.");
        } else {
            alert("Error al registrar la venta.");
        }

    } catch (error) {
        console.error("Error al enviar los datos de la venta:", error);
        alert("Ocurrió un error al procesar la venta.");
    }
};

export default finalizarventa;

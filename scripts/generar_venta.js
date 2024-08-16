import solicitud,{ enviar } from "./modulo/ajax.js";
import validarSesion  from "./menu.js";
const finalizarventa = async () => {
    const tbody = document.querySelector("#tbody_venta");
    const rows = tbody.querySelectorAll("tr");

    if (rows.length === 0) {
        alert("No hay productos aún en la tabla.");
        return;
    }

    let totalVenta = 0;
    const ventas = [];

    // console.log(validarSesion());
    
    
    for (const fila of rows) {
        //selecciona el primer hijo de td y asi susecivamente
        const id_p = fila.querySelector("td:nth-child(1)").textContent.trim();
        const nombre_producto = fila.querySelector("td:nth-child(2)").textContent.trim();
        const peso_venta = parseFloat(fila.querySelector("td:nth-child(3)").textContent.trim());
        const precio_libra = parseFloat(fila.querySelector("td:nth-child(4)").textContent.trim());
        const precio_total_pro = parseFloat(fila.querySelector("td:nth-child(5)").textContent.trim());

        totalVenta += precio_total_pro;

        ventas.push({
            id_producto_fk: id_p,
            nombre_p_fk: nombre_producto,
            peso_v: peso_venta,
            precioXlibra_fk: precio_libra,
            total_producto: precio_total_pro,
            total_factura: totalVenta,
            id_empleado: validarSesion()
        });
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
        console.log("Error al enviar los datos:", error);
        alert("Ocurrió un error al procesar la venta.");
    }
};

export default finalizarventa


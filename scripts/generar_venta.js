const finalizarventa = () => {
    const tbody = document.querySelector("#tbody_venta");
    const rows = tbody.querySelectorAll("tr");

    if (rows.length === 0) {
        alert("No hay productos aún en la tabla.");
        return;  
    }

    let totalVenta = 0;
    rows.forEach(row => {
        const totalCelda = row.querySelector("td:nth-child(5)"); // La celda del total es la quinta
        const peso_venta = row.querySelector("td:nth-child(4)"); // La celda del total es la quinta
        const totalTexto = totalCelda.textContent.replace('$', '');
        totalVenta += parseFloat(totalTexto);
    });

    // Mostrar el total en un alert
    alert(`El total de la venta es: ${totalVenta}`);

    // Limpiar la tabla
    tbody.innerHTML = '';
};

export default finalizarventa


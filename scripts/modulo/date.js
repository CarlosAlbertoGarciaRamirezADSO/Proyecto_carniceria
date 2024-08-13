const validar_fecha = (event, elemento) => {
    const fecha_input = new Date(elemento.value);
    const fecha_hoy = new Date();

    fecha_hoy.setHours(0, 0, 0, 0);

    if (fecha_input >= fecha_hoy) {
        elemento.classList.add("border-green-500", "border-2");
        elemento.classList.remove("border-red-500", "border-2");
        return true;
        
    } else {
        event.preventDefault();
        elemento.classList.remove("border-green-500", "border-2");
        elemento.classList.add("border-red-500", "border-2");
        return false;

    }
    // return validar_fh
}
export default validar_fecha;

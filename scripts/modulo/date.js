// const validar_fecha = (event, elemento) => {

//     let spanExist = elemento.parentElement.querySelector("#alertaD")
//     const fecha_input = new Date(elemento.value);
//     const fecha_hoy = new Date();

//     fecha_hoy.setHours(0, 0, 0, 0);

//     if (fecha_input >= fecha_hoy) {
//         elemento.classList.add("border-green-500", "border-2");
//         elemento.classList.remove("border-red-500", "border-2");
//         if (spanExist) {
//             elemento.parentElement.removeChild(spanExist);
//         }
//         return true;
        
//     } else {
//         event.preventDefault();
//         elemento.classList.remove("border-green-500", "border-2");
//         elemento.classList.add("border-red-500", "border-2");

//         if (!spanExist) {
//             let span = document.createElement('span');
//             span.textContent = "Debe ingresar la fecha";
//             span.classList.add("text-red-500", "mt-2", "ml-auto","alertsD");
//             span.setAttribute("id", "alertaD");
//             elemento.parentElement.appendChild(span);
//         }

//         return false;

//     }
// }
// export default validar_fecha;

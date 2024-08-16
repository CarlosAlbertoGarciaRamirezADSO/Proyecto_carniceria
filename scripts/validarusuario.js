const dom = document;
const formulario = dom.querySelector("#login_form");
const correo = dom.querySelector("#correo");
const contraseña = dom.querySelector("#contraseña");

const validaruser = (event) => {
    event.preventDefault();

    const data = {
        correo: correo.value,
        contraseña: contraseña.value
    };

    fetch('http://localhost:3000/Users')
        .then(response => response.json())
        .then(users => {
            const usuario = users.find(user => user.correo === data.correo && user.contraseña === data.contraseña);
            const rol = users.rol;
            // const usuarioactivo = localStorage.setItem(usuario);
            // console.log(usuarioactivo);
            
            console.log(usuario);
            
            localStorage.setItem("usuarioActivo", JSON.stringify(usuario));

            if (usuario.rol == '1') {
                alert("Inicio de sesión SUPER Administration");
                    window.location.href = "../pages/administrador_roles.html";
            }else if (usuario.rol == '2') {
                    alert("Inicio de sesión empleado");
                    window.location.href = "../pages/empleado_v.html";
            }
            else if (usuario.rol == '3') {
                alert("Inicio de sesión pendiente");
                    window.location.href = "../index.html";
            }
        })
        .catch(err => {
            console.log("Error:", err);
            alert("Error");
        });
};

formulario.addEventListener('submit', validaruser);
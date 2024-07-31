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
            if (usuario) {
                alert("Inicio de sesión");
                window.location.href = "../pages/Productos.html";
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        })
        .catch(err => {
            console.log("Error:", err);
            alert("Error");
        });
};

formulario.addEventListener('submit', validaruser);
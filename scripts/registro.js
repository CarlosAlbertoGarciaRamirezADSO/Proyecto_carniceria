    const dom = document;
    const correo = dom.querySelector("#correo");
    const contraseña1 = dom.querySelector("#contraseña1");
    const contraseña2 = dom.querySelector("#contraseña2");
    const formulario = dom.querySelector("#registrar_formulario");

    const bien = (elemento)=>{
        elemento.classList.add("border-green-500");
        elemento.classList.remove("border-red-500");
    }
    const mal = (elemento)=>{
        elemento.classList.remove("border-green-500", "border-2");
        elemento.classList.add("border-red-500", "border-2");
    }

    const validarcorreo = (elemento) => {
        const regex_correo = /^[\w-._]+@[\w-._]+\.[a-zA-Z]{2,4}$/;
        if (regex_correo.test(elemento.value)) {
            bien(elemento);
            return true; 
        } else {
            mal(elemento);
            return false; 
        }
    };
    
    const validarcontraseña = (elemento) => {
        const regex_contraseña = /^[a-zA-Z\d]{8,}$/;
        if (regex_contraseña.test(elemento.value)) {
            bien(elemento);
            return true; 
        } else {
            mal(elemento);
            return false; 
        }
    };
    
    const coinciden = (contraseña1, contraseña2) => {
        if (contraseña1.value === contraseña2.value) {
                bien(contraseña2);
                return true; 
        } else {
            mal(contraseña2);
            return false; 
        }
    };
    
    const validarformulario = () => {
        let validarform = 1; 
    
        const correo_bien = validarcorreo(correo);
        const contraseña1_bien = validarcontraseña(contraseña1);
        const contraseña2_bien = validarcontraseña(contraseña2);
        const coincide = coinciden(contraseña1, contraseña2);

        if (!correo_bien || !contraseña1_bien || !contraseña2_bien || !coincide) {
            validarform = 0;
        }
        return validarform; 
    };
    

    const enviarFormulario = (event) => {
        event.preventDefault();
        const formulario_valido = validarformulario(); 
        if (formulario_valido == 1) {
            const data = {
                correo: correo.value,
                contraseña: contraseña1.value
            };
            fetch('http://localhost:3000/Users', {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-type": "application/json;charset=UTF-8" }
            })
            .then(response => response.json())
            .then(json => {
                alert("Registrado con éxito");
                console.log(json);
                formulario.reset();
            })
            .catch(err => {
                console.log("Error:", err);
                alert("No se registró");
            });
        }
        else{
            alert("no se pudo registrar")
        }
    };

    formulario.addEventListener('submit', enviarFormulario);
    correo.addEventListener("blur", () => validarcorreo(correo));
    contraseña1.addEventListener("blur", () => validarcontraseña(contraseña1));
    contraseña2.addEventListener("blur", () => coinciden(contraseña1, contraseña2));


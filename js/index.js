
let usuarioCorreo = "curso@hotmail.com"
let contrasenia = "1234"
const nombre = "Tutor Coder"

function validarMail() {

    let validarCorreo = prompt("Ingrese su Correo")
    if (validarCorreo != usuarioCorreo) {
        alert("Correo Incorrecto")
        return validarMail()
    }
}
validarMail()


function validarContrasenia() {

    let validarContra = prompt("Ingrese su contraseña")
    if (validarContra != contrasenia) {
        alert("Contraseña Incorrecta")
        return validarContrasenia()
    }
    else {
        return alert("Bienvenido " + nombre)
    }
}
validarContrasenia()


let usuarioMail = prompt("Ingrese su Correo");

const login = (usuarioMail) => {

    let arroba = false

    for (let i = 0; i < usuarioMail.length; i++) {
        if (usuarioMail[i] === "@") {
            arroba = true;
        } else {
            arroba != true;
            alert("Su correo es incorrecto!!");
            let usuarioNuevoMail = prompt("Ingrese un correo valido: ");
            break;
        }
    } return arroba;
}

login(usuarioMail);











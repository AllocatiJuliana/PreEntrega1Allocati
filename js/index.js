
let usuarioCorreo = "curso@hotmail.com"
let contrasenia = "1234"
const nombre = "Tutor Coder"

function validarMail() {

    let validarCorreo = prompt("Ingrese su Correo")
    if (validarCorreo != usuarioCorreo) {
        alert("Mail Incorrecto")
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












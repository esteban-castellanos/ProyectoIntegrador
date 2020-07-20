let email = document.getElementById("email");
let contraseña = document.getElementById("password");
let formulario = document.getElementById("formlogin");

let errores = [];

email.addEventListener("blur", function(){
    if (email.value == ""){
        errores.push("Este Campo debe estar completo");
        document.querySelector('.email.invalid-feedback').innerHTML = '<li>Debe ingresar su email</li>';
        email.classList.add("is-invalid");
        } else {
        document.querySelector('.email.invalid-feedback').innerHTML = ""
        email.classList.remove("is-invalid");
        let elemento = errores.indexOf("Este Campo debe estar completo")
        if (elemento > -1){
            errores.splice(elemento, 1)
        }
    }
});

contraseña.addEventListener("blur", function(){
    if (contraseña.value == ""){
        contraseña.classList.add("is-invalid");
        document.querySelector('.contraseña.invalid-feedback').innerHTML = '<li> Debe ingresar una contraseña </li>';
        errores.push("Debe ingresar una contraseña");
        } else {
        document.querySelector('.contraseña.invalid-feedback').innerHTML = ""
        contraseña.classList.remove("is-invalid");
        let elemento = errores.indexOf("Debe ingresar una contraseña")
        if (elemento > -1){
            errores.splice(elemento, 1)
        }
    }
});

formulario.addEventListener("submit", function(e){
    console.log(errores);
    if (errores.length > 0){
    e.preventDefault();
    }
});
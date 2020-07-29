let email = document.getElementById("email");
let contraseña = document.getElementById("password");
let formulario = document.getElementById("formlogin");

let errores = [];

email.addEventListener("blur", function(){
    if (email.value == ""){
        document.querySelector('.email.invalid-feedback').innerHTML = '<li>Debe ingresar su email</li>';
        email.classList.add("is-invalid");
        } else {
        document.querySelector('.email.invalid-feedback').innerHTML = ""
        email.classList.remove("is-invalid");
    }
});

contraseña.addEventListener("blur", function(){
    if (contraseña.value == ""){
        contraseña.classList.add("is-invalid");
        document.querySelector('.contraseña.invalid-feedback').innerHTML = '<li> Debe ingresar una contraseña </li>';
        } else {
        document.querySelector('.contraseña.invalid-feedback').innerHTML = ""
        contraseña.classList.remove("is-invalid");
    }
});

formulario.addEventListener("submit", function(e){
    if (email.value == ""){
        errores.push("Este Campo debe estar completo");
        document.querySelector('.email.invalid-feedback').innerHTML = '<li>Debe ingresar su email</li>';
        email.classList.add("is-invalid");
    }
    if (contraseña.value == ""){
        contraseña.classList.add("is-invalid");
        document.querySelector('.contraseña.invalid-feedback').innerHTML = '<li> Debe ingresar una contraseña </li>';
        errores.push("Debe ingresar una contraseña");
    }

    if (errores.length > 0){
    e.preventDefault();
    errores = [];
    }
});
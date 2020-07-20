let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let contraseña = document.getElementById("password");
let formulario = document.getElementById("formulario");

let errores = [];
nombre.addEventListener("blur", function(){
    if(nombre.value == ""){
        errores.push("El campo nombre debe estar completo");
        nombre.classList.add("is-invalid");
        document.querySelector('.nombre.invalid-feedback').innerHTML = '<li>Este campo debe estar completo.</li>'
    } else if (nombre.value.length < 2){
        nombre.classList.add("is-invalid");
        document.querySelector('.nombre.invalid-feedback').innerHTML = '<li> El nombre debe tener al menos 2 caracteres </li>';
        errores.push("El nombre debe tener al menos 2 caracteres");
        } else {
        document.querySelector('.nombre.invalid-feedback').innerHTML = ""
        nombre.classList.remove("is-invalid");
        let elemento = errores.indexOf("El nombre debe tener al menos 2 caracteres")
        if (elemento > -1){
            errores.splice(elemento, 1);
        }
        let elementoDos = errores.indexOf("El campo nombre debe estar completo")
        if (elementoDos > -1){
            errores.splice(elementoDos, 1);
        }
    }
});

apellido.addEventListener("blur", function(){
    if(apellido.value == ""){
        errores.push("El campo apellido debe estar completo");
        apellido.classList.add("is-invalid");
        document.querySelector('.apellido.invalid-feedback').innerHTML = '<li>Este campo debe estar completo.</li>'
    } else if (apellido.value.length < 2){
        apellido.classList.add("is-invalid");
        document.querySelector('.apellido.invalid-feedback').innerHTML = '<li> El apellido debe tener al menos 2 caracteres </li>';
        errores.push("El apellido debe tener al menos 2 caracteres");
        } else {
        document.querySelector('.apellido.invalid-feedback').innerHTML = ""
        apellido.classList.remove("is-invalid");
        let elemento = errores.indexOf("El apellido debe tener al menos 2 caracteres")
        if (elemento > -1){
            errores.splice(elemento, 1);
        }
        let elementoDos = errores.indexOf("El campo apellido debe estar completo")
        if (elementoDos > -1){
            errores.splice(elementoDos, 1);
        }
    }
});

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
        } else if (contraseña.value.length < 8){
        contraseña.classList.add("is-invalid");
        document.querySelector('.contraseña.invalid-feedback').innerHTML = '<li> La contraseña debe tener al menos 8 caracteres </li>';
        errores.push("La contraseña debe tener al menos 4 caracteres");
        } else {
        document.querySelector('.contraseña.invalid-feedback').innerHTML = ""
        contraseña.classList.remove("is-invalid");
        let elemento = errores.indexOf("Debe ingresar una contraseña")
        if (elemento > -1){
            errores.splice(elemento, 1)
        }
        let elementoDos = errores.indexOf("La contraseña debe tener al menos 4 caracteres")
        if (elementoDos > -1){
            errores.splice(elementoDos, 1)
        }
    }
});

formulario.addEventListener("submit", function(e){
    console.log(errores);
    if (errores.length > 0){
    e.preventDefault();
    }
});
let nombre = document.getElementById("nombre");
let imagen = document.getElementById("file");
let formulario = document.getElementById("formulario");


let errores = [];

nombre.addEventListener("blur", function(){
    if(nombre.value == ""){
        nombre.classList.add("is-invalid");
        document.querySelector('.nombre.invalid-feedback').innerHTML = '<li>Este campo debe estar completo.</li>'
    } else if (nombre.value.length < 2){
        nombre.classList.add("is-invalid");
        document.querySelector('.nombre.invalid-feedback').innerHTML = '<li> El nombre debe tener al menos 2 caracteres </li>';
        } else {
        document.querySelector('.nombre.invalid-feedback').innerHTML = ""
        nombre.classList.remove("is-invalid");
    }
});

//Falta Validación de imagen desde el Front

formulario.addEventListener("submit", function(e){
    if(nombre.value == ""){
        errores.push("El campo nombre debe estar completo");
        nombre.classList.add("is-invalid");
        document.querySelector('.nombre.invalid-feedback').innerHTML = '<li>Este campo debe estar completo.</li>'
    } else if (nombre.value.length < 2){
        nombre.classList.add("is-invalid");
        document.querySelector('.nombre.invalid-feedback').innerHTML = '<li> El nombre debe tener al menos 2 caracteres </li>';
        errores.push("El nombre de la tienda debe tener al menos 2 caracteres");
        }

    if (errores.length > 0){
    e.preventDefault();
    errores = [];
    }
});
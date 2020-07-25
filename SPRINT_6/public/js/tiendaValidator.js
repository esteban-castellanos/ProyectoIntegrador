let nombre = document.getElementById("nombre");
let file = document.getElementById("file");
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

    if (!file.value.includes("jpg") && !file.value.includes("jpeg") && !file.value.includes("png") && !file.value.includes("gif")){
        file.classList.add("is-invalid");
        document.querySelector('.file.invalid-feedback').innerHTML = '<li>La imagen debe tener un formato válido</li>';
        errores.push("La imagen debe tener un formato válido")
    } else {
        document.querySelector('.file.invalid-feedback').innerHTML = ""
        file.classList.remove("is-invalid");
    }

    if (errores.length > 0){
    e.preventDefault();
    errores = [];
    }
});
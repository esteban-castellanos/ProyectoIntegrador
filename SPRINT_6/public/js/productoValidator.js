let codigo = document.getElementById("codigo");
let nombre = document.getElementById("nombre");
let descripcion = document.getElementById("descCorta");
let precio = document.getElementById("precio");
let tiendas = document.getElementById("tiendas");
let org = document.getElementById("org");
let sinTacc = document.getElementById("sinTacc");
let sinLactosa = document.getElementById("sinLactosa");
let file = document.getElementById("file");
let formulario = document.getElementById("formulario");

let errores = [];
codigo.addEventListener("blur", function(){
    if (isNaN(codigo.value)){
        codigo.classList.add("is-invalid");
        document.querySelector('.codigo.invalid-feedback').innerHTML = '<li>El código debe ser un número</li>';
        } else {
        document.querySelector('.codigo.invalid-feedback').innerHTML = ""
        codigo.classList.remove("is-invalid");
    }
});
nombre.addEventListener("blur", function(){
    if(nombre.value == ""){
        nombre.classList.add("is-invalid");
        document.querySelector('.nombre.invalid-feedback').innerHTML = '<li>Este campo debe estar completo.</li>'
    } else if (nombre.value.length < 5){
        nombre.classList.add("is-invalid");
        document.querySelector('.nombre.invalid-feedback').innerHTML = '<li> El nombre debe tener al menos 5 caracteres </li>';
        } else {
        document.querySelector('.nombre.invalid-feedback').innerHTML = ""
        nombre.classList.remove("is-invalid");
        }
        });

descripcion.addEventListener("blur", function(){
        if (descripcion.value.length < 15){
            descripcion.classList.add("is-invalid");
            document.querySelector('.descripcion.invalid-feedback').innerHTML = '<li> La descripción debe tener al menos 15 caracteres </li>';
        } else {
            document.querySelector('.descripcion.invalid-feedback').innerHTML = ""
            descripcion.classList.remove("is-invalid");
        }
});
precio.addEventListener("blur", function(){
    if (isNaN(precio.value)){
        precio.classList.add("is-invalid");
        document.querySelector('.precio.invalid-feedback').innerHTML = '<li>El precio debe ser un número</li>';
        } else {
        document.querySelector('.precio.invalid-feedback').innerHTML = ""
        precio.classList.remove("is-invalid");
        }
});
tiendas.addEventListener("blur", function(){
    if (tiendas.value == ""){
        tiendas.classList.add("is-invalid");
        document.querySelector('.tiendas.invalid-feedback').innerHTML = '<li>Debe seleccionar una tienda</li>';
        } else {
        tiendas.classList.remove("is-invalid");
        document.querySelector('.tiendas.invalid-feedback').innerHTML = ""
    }
});

formulario.addEventListener("submit", function(e){
        if (isNaN(codigo.value)){
            codigo.classList.add("is-invalid");
            document.querySelector('.codigo.invalid-feedback').innerHTML = '<li>El código debe ser un número</li>';
            errores.push("El código debe ser un número");
        }

        if(nombre.value == ""){
            errores.push("El campo nombre debe estar completo");
            nombre.classList.add("is-invalid");
            document.querySelector('.nombre.invalid-feedback').innerHTML = '<li>Este campo debe estar completo.</li>'
        } else if (nombre.value.length < 5){
            nombre.classList.add("is-invalid");
            document.querySelector('.nombre.invalid-feedback').innerHTML = '<li> El nombre debe tener al menos 5 caracteres </li>';
            errores.push("El nombre de la tienda debe tener al menos 5 caracteres")
        }

        if (tiendas.value == ""){
            tiendas.classList.add("is-invalid");
            errores.push("Debe seleccionar una tienda");
        }

        if (descripcion.value.length < 15){
            descripcion.classList.add("is-invalid");
            document.querySelector('.descripcion.invalid-feedback').innerHTML = '<li> La descripción debe tener al menos 15 caracteres </li>';
            errores.push("La descripción debe tener al menos 15 caracteres");
        }
        //Pendiente. Que lea el valor que trae y que pase cuando se selecciona algún filtro
        /*if (org.value == undefined && sinTacc.value == undefined && sinLactosa.value == undefined){
            document.querySelector('.filtros.invalid-feedback').innerHTML = '<li>Debe seleccionar uno o más filtros</li>';
            errores.push("Debe seleccionar uno o más filtros");
        }*/

        if (isNaN(precio.value)){
            precio.classList.add("is-invalid");
            document.querySelector('.precio.invalid-feedback').innerHTML = '<li>El precio debe ser un número</li>';
            errores.push("El precio debe ser un número")
        }

        if (!file.value.includes("jpg") && !file.value.includes("jpeg") && !file.value.includes("png") && !file.value.includes("gif")){
            file.classList.add("is-invalid");
            document.querySelector('.file.invalid-feedback').innerHTML = '<li>La imagen debe tener un formato válido</li>';
            errores.push("La imagen debe tener un formato válido")
        } else {
            document.querySelector('.file.invalid-feedback').innerHTML = ""
            file.classList.remove("is-invalid");
        }

        console.log(file.value);
        console.log(errores);

        if (errores.length > 0){
            e.preventDefault();
            errores = [];
        } else {
            let confirmar = confirm("Está seguro de que dese editar este ítem?")
            if (confirmar != true){
                e.preventDefault();
            }
        }
});



let sumar = document.getElementById("sumar");
let restar = document.getElementById("restar");
let quantity = document.getElementById("quantity");
let opcion = document.getElementById("opcion");
let formulario = document.getElementById("formulario");

    sumar.addEventListener("click", function(){
        quantity.value++
    })

    restar.addEventListener("click", function(){
        quantity.value--
    })

    let errores = [];
    formulario.addEventListener("submit", function(e){
        if (opcion.value != "eliminar" && opcion.value != "distintoTam" && opcion.value != "marcaSim" ){
            errores.push("Debe seleccionar una opción");
            document.querySelector('.opcion.invalid-feedback').innerHTML = '<li>Debe seleccionar una opción</li>';
            opcion.classList.add("is-invalid");
        }
    if (errores.length > 0){
        e.preventDefault();
        errores = [];
        }
    })


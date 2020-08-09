let sumar = document.querySelectorAll(".sumar");
let restar = document.querySelectorAll(".restar");
let quantity = document.getElementById("quantity");

window.addEventListener('load', function(){

    for (const botonSuma of sumar){
        botonSuma.addEventListener("click", function(){
            quantity.value++
        })
    }
    for (const botonResta of restar){
        botonResta.addEventListener("click", function(){
            quantity.value--
        })
    }

})
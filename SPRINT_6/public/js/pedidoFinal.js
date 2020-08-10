let sumar = document.querySelectorAll(".sumar");
let restar = document.querySelectorAll(".restar");
let quantity = document.querySelectorAll(".quantity");

window.addEventListener('load', function(){

    for (let i = 0; i< sumar.length; i++) {
        sumar[i].addEventListener("click", function(){
                quantity[i].value++
        })
    }
    for (let i = 0; i< restar.length; i++) {
        restar[i].addEventListener("click", function(){
                quantity[i].value--
        })
    }

})
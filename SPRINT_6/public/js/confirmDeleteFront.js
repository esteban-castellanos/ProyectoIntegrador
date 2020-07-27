window.addEventListener('load', function(){
    let clickDelete= document.querySelectorAll(".click-delete");

    for (const boton of clickDelete){
        boton.addEventListener("submit", function(e){
            desea = confirm('¿Deseas eliminar el item seleccionado?');
                if(desea != true){
                    e.preventDefault()
                }
             })
    }
})
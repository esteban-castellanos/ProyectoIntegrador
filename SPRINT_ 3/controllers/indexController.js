const fs =require('fs');

const indexController = {

home: function (req,res){
    let archivoTiendas=fs.readFileSync('data_tiendas.json', {encoding: 'utf-8'});
    let tiendas;
    if(archivoTiendas == ""){
        tiendas =[];
        } else {
        tiendas = JSON.parse(archivoTiendas);
    }

    //Falta ver cómo hacer para que el nombre con el que se guarde la foto sea igual al de la foto que se sube para que la llame directamente.

    res.render('index', {tiendas:tiendas});
},
productosPorTienda: function (req,res){
    let archivoTiendas=fs.readFileSync('data_productos.json', {encoding: 'utf-8'});
    let productos;
    if(archivoTiendas == ""){
        productos =[];
        } else {
        productos = JSON.parse(archivoTiendas);
    }
    //Falta entender cómo viaja el nombre o código de la tienda al hacer click para despues decir:
    //De los productos.tienda == req.params.nombreTienda y mandar solo esos a la vista.
    console.log(req.params.nombreTienda);
    res.render('prodPorTienda', {productos:productos});
},

}

module.exports = indexController
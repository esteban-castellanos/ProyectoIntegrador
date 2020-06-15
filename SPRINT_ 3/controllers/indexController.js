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

    res.render('index', {tiendas:tiendas});
},

productosPorTienda: function (req,res){
//leer el listado de productos, y todos aquellos que tengan como nombre de la tienda productos.tienda =
//encontrar a la tienda con ese codigo y dsp comparar el tiend.Nombre
    let archivoTiendas=fs.readFileSync('data_tiendas.json', {encoding: 'utf-8'});
    let tiendas;
    if(archivoTiendas == ""){
        tiendas =[];
        } else {
        tiendas = JSON.parse(archivoTiendas);
    }

    tiendas.forEach((tiend, i) => {
        if (tiend.codigo == req.params.codigo) {
            tienda = tiend;
        }
    });

    let archivoProductos=fs.readFileSync('data_productos.json', {encoding: 'utf-8'});
    let productos;
    if(archivoProductos == ""){
        productos =[];
        } else {
        productos = JSON.parse(archivoProductos);
    }

    let productosTienda = [];
    productos.forEach((prod, i) => {
        if (prod.tienda == tienda.nombreTienda){
            productosTienda.push(prod);
            }
        //console.log(productosTienda);
    });

    res.render('prodPorTienda', {productos: productosTienda});
},

}

module.exports = indexController
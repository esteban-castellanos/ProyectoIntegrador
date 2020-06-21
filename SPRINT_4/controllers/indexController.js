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

search: function (req,res){

let archivoProductos=fs.readFileSync('data_productos.json', {encoding: 'utf-8'});
            let productos;
            if(archivoProductos == ""){
                productos =[];
            } else {
                productos = JSON.parse(archivoProductos);
            }

let results = [];
    productos.forEach((prod, i) => {
        if (prod.nombreProducto.includes(req.query.nombre)) {
            results.push(prod);
        } else {
        }
        });

      if (results !== []){
        res.render('prodPorTienda', {productos: results});
    }
    },

}


module.exports = indexController
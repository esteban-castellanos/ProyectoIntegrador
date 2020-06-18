const fs =require('fs');

const productosController = {

    /*detalle: function (req,res){
        res.render('productDetail');
    },*/

    productosPorTienda: function (req,res){

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
        });
        res.render('prodPorTienda', {productos: productosTienda});
    },

    productosOrganicos: function(req,res){
        let archivoProductos=fs.readFileSync('data_productos.json', {encoding: 'utf-8'});
        let productos;
        if(archivoProductos == ""){
            productos =[];
            } else {
            productos = JSON.parse(archivoProductos);
        }

        let productosOrganicos = [];
        productos.forEach((prod, i) => {
            if (prod.filtroOrg == "on"){
                productosOrganicos.push(prod);
                }
        });
        console.log(productosOrganicos);
        res.render("prodPorTienda", {productos: productosOrganicos})

    },

    productosSinTacc: function(req,res){
        let archivoProductos=fs.readFileSync('data_productos.json', {encoding: 'utf-8'});
        let productos;
        if(archivoProductos == ""){
            productos =[];
            } else {
            productos = JSON.parse(archivoProductos);
        }
        let productosSinTacc = [];
        productos.forEach((prod, i) => {
            if (prod.filtroSinTacc == "on"){
                productosSinTacc.push(prod);
                }
        });
        res.render("prodPorTienda", {productos: productosSinTacc})
    },

    productosSinLactosa: function(req,res){
        let archivoProductos=fs.readFileSync('data_productos.json', {encoding: 'utf-8'});
        let productos;
        if(archivoProductos == ""){
            productos =[];
            } else {
            productos = JSON.parse(archivoProductos);
        }
        let productosSinLactosa = [];
        productos.forEach((prod, i) => {
            if (prod.filtrosSinLactosa == "on"){
                productosSinLactosa.push(prod);
                }
        });
        res.render("prodPorTienda", {productos: productosSinLactosa})
    },

    detalleProducto: function(req,res){
        let archivoProductos=fs.readFileSync('data_productos.json', {encoding: 'utf-8'});
        let productos;
        if(archivoProductos == ""){
            productos =[];
            } else {
            productos = JSON.parse(archivoProductos);
        }

        let productoSeleccionado
        productos.forEach((prod, i) => {
            if (prod.codigo == req.params.codigo){
                productoSeleccionado = prod
                }
        })

        res.render('productDetail', {producto: productoSeleccionado});
    },
    }


    module.exports = productosController
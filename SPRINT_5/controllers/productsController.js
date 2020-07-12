const fs =require('fs');
let db = require("../database/models");

const productosController = {

    productosPorTienda: function (req,res){

        db.Tienda.findByPk(req.params.codigo, {
            include: ["productos"]
        })
            .then (function(tienda){
            return res.render('prodPorTienda', {productos: tienda.productos, user: req.session.usuarioLogueado});
        })
    },

    productosOrganicos: function(req,res){
        db.Categoria.findOne({
            include: [{association: "productos"}],
            where: {name:"filtroOrg"}
        })

        .then(function(categoria){
            res.render("prodPorTienda", {productos: categoria.productos, user: req.session.usuarioLogueado})
        });

    },

    productosSinTacc: function(req,res){
        db.Categoria.findOne({
            include: [{association: "productos"}],
            where: {name:"filtroSinTacc"}
        })

        .then(function(categoria){
            res.render("prodPorTienda", {productos: categoria.productos, user: req.session.usuarioLogueado})
        });
    },

    productosSinLactosa: function(req,res){
        db.Categoria.findOne({
            include: [{association: "productos"}],
            where: {name:"filtroSinLactosa"}
        })

        .then(function(categoria){
            res.render("prodPorTienda", {productos: categoria.productos, user: req.session.usuarioLogueado})
        });
    },

    detalleProducto: function(req,res){
        db.Producto.findByPk(req.params.codigo)
        .then(function(producto){
            res.render('productDetail', {producto: producto, user: req.session.usuarioLogueado});
        })
    },

    //Acá empieza la parte en donde sólo tiene acceso el adm.

        nuevoProducto: function (req,res){

            db.Tienda.findAll()
                .then (function(tiendas){
                    res.render('productAdd', {tiendas: tiendas});
                })
        },
            //FALTA
        crearProducto: function(req, res){
            db.Producto.create({
                name: req.body.nombreProduct,
                short_description: req.body.descCorta,
                long_description: req.body.descLarga,
                price: req.body.precio,
                image: req.files[0].filename,
                store_id: req.body.tienda,
                filtroOrg: req.body.org,
                filtroSinTacc: req.body.sinTacc,
                filtrosSinLactosa: req.body.sinLactosa
            })
                res.redirect('/productos');
        },

        listadoProductos: function (req,res){
            db.Producto.findAll({
                include: ["tienda"],
            })
                .then(function(productos){
                    res.render("listadoProductos", {productos:productos});
                })
        },

        get_searchProductos: function (req,res){
            // con req.query.<dato> obtenemos el dato que viene del cliente en el cuerpo del form por GET

            db.Producto.findAll({
                include: ["tienda"],
            })
                .then(function(productos){

                    let nombreBuscado =  req.query.nombre;
                    let results = [];
                    productos.forEach((prod, i) => {
                        if (prod.name.includes(nombreBuscado)) {
                            results.push(prod);
                        }
                    });
                    return res.render('listadoProductos', {productos: results});
                })
        },

        //FALTA
        deleteProduct: function(req,res){
            console.log(req.params.codigo);
            db.Producto.destroy({
                where: {id: req.params.codigo}
            })
                .then(function(){
                    res.redirect("productos");
                })
        },

        get_editProducto: function(req,res){
                let pedidoProducto = db.Producto.findByPk(req.params.codigo,{
                    include: ["tienda"]
                })
                let pedidoTiendas = db.Tienda.findAll();

                Promise.all([pedidoProducto, pedidoTiendas])
                    .then(function([producto, tiendas]){
                        res.render('productEdit',{producto: producto, tiendas:tiendas});

                    })
        },

            //FALTA

        put_editProducto: function (req,res){

            db.Producto.update({
                name: req.body.nombreProduct,
                short_description: req.body.descCorta,
                long_description: req.body.descLarga,
                price: req.body.price,
                store_id: req.body.tienda,
                image: req.files[0].filename,
                filtroOrg = req.body.org,
                filtroSinTacc = req.body.sinTacc,
                filtrosSinLactosa = req.body.sinLactosa,
            }, {
                where: {
                id: req.params.codigo
                }
            });
                  res.redirect("/productos");
        },

        listadoTiendas: function (req,res){
            db.Tienda.findAll()
                .then(function(tiendas){
                    res.render('listadoTiendas', {tiendas: tiendas});
                })
        },

        get_searchTiendas: function (req,res){
            db.Tienda.findAll()
                .then(function(tiendas){
                    let nombreBuscado =  req.query.nombre;
                    let results = [];
                    tiendas.forEach((tiend, i) => {
                        if (tiend.name.includes(nombreBuscado)) {
                            results.push(tiend);
                        }
                    });
                    return res.render('listadoTiendas', {tiendas: results});
                })
        },

        nuevaTienda: function (req,res){
                res.render('tiendaAdd');
            },

        crearTienda: function(req, res){
            db.Tienda.create({
                name: req.body.nombreTienda,
                description: req.body.descLarga,
                image: req.files[0].filename
            })

                res.redirect('/productos/tiendas');
            },


        get_editTienda: function(req,res){

            db.Tienda.findByPk(req.params.codigo)
                .then(function(tienda){
                    return res.render('tiendaEdit', {tienda: tienda});
                })
            },

        put_editTienda: function (req,res){

            db.Tienda.update({
                name: req.body.nombreTienda,
                description: req.body.descLarga,
                image: req.files[0].filename
            }, {
                where: {
                id: req.params.codigo
                }
            })
                .then(function(){
                    res.redirect("/productos/tiendas");
                })
        },

        deleteTienda: function(req,res){

            db.Tienda.destroy({
                where: {id: req.params.codigo}
            })
                .then(function(){
                    res.redirect("/productos/tiendas");
                })
            },
    }

    module.exports = productosController;

const fs =require('fs');
const {check, validationResult, body} = require ('express-validator');
var path = require('path');
let db = require("../database/models");

const productosController = {

    productosPorTienda: function (req,res){

        db.Tienda.findByPk(req.params.codigo, {
            include: ["productos"]
        })
            .then (function(tienda){
            return res.render('prodPorTienda', {productos: tienda.productos, user: req.session.usuarioLogueado});
            })
            .catch(function(e){
                console.log(e)
            });
    },

    productosOrganicos: function(req,res){
        db.Categoria.findOne({
            include: [{association: "productos"}],
            where: {name:"filtroOrg"}
        })

        .then(function(categoria){
            res.render("prodPorTienda", {productos: categoria.productos, user: req.session.usuarioLogueado})
        })
        .catch(function(e){
            console.log(e)
        });

    },

    productosSinTacc: function(req,res){
        db.Categoria.findOne({
            include: [{association: "productos"}],
            where: {name:"filtroSinTacc"}
        })

        .then(function(categoria){
            res.render("prodPorTienda", {productos: categoria.productos, user: req.session.usuarioLogueado})
        })
        .catch(function(e){
            console.log(e)
        });
    },

    productosSinLactosa: function(req,res){
        db.Categoria.findOne({
            include: [{association: "productos"}],
            where: {name:"filtroSinLactosa"}
        })

        .then(function(categoria){
            res.render("prodPorTienda", {productos: categoria.productos, user: req.session.usuarioLogueado})
        })
        .catch(function(e){
            console.log(e)
        });
    },

    detalleProducto: function(req,res){
        db.Producto.findByPk(req.params.codigo)
        .then(function(producto){
            res.render('productDetail', {producto: producto, user: req.session.usuarioLogueado});
        })
        .catch(function(e){
            console.log(e)
        });
    },

    //Acá empieza la parte en donde sólo tiene acceso el adm.

        nuevoProducto: function (req,res){

            db.Tienda.findAll()
                .then (function(tiendas){
                    res.render('productAdd', {tiendas: tiendas});
                })
                .catch(function(e){
                    console.log(e)
                });
        },

        crearProducto: function(req, res, next){
            db.Tienda.findOne({
                where: {name: req.body.tienda}
            })
                .then(function(tienda){
                    let errors = validationResult(req);
                    console.log(path.extname(req.files[0].originalname));
                    console.log(errors);
                    if (errors.isEmpty()){
                            db.Producto.create({
                            code: req.body.codigoProduct,
                            name: req.body.nombreProduct,
                            short_description: req.body.descCorta,
                            long_description: req.body.descLarga,
                            price: req.body.precio,
                            image: req.files[0].filename,
                            store_id: tienda.id,
                        })
                    } else {
                        return res.render('productAdd', {errors: errors.errors});
                    }
                });
                    db.Producto.findOne({
                        where: {code:req.body.codigoProduct}
                    })
                    .then(function(producto){
                        console.log(producto);
                    })
                /*
                .then(function(){
                    if (req.body.org != undefined){
                        console.log("Holaaaaa")
                        let pedidoProducto = db.Producto.findOne({
                            where: {codigo: req.body.codigoProduct}
                        })
                        let pedidoCategoria = db.Categoria.findOne({
                            where: {name: "filtroOrg"}
                        })
                    Promise.all([pedidoProducto, pedidoCategoria])
                        .then(function([producto, categoria]){
                            console.log(producto)
                            console.log(categoria)
                            db.ProductosCategorias.create({
                                product_id: producto.id,
                                category_id:categoria.id
                            })
                        })
                    };
                    if (req.body.sinTacc != undefined){
                        let pedidoProducto = db.Producto.findOne({
                            where: {codigo: req.body.codigoProduct}
                        })
                        let pedidoCategoria = db.Categoria.findOne({
                            where: {name: "filtroSinTacc"}
                        })
                        Promise.all([pedidoProducto, pedidoCategoria])
                        .then(function([producto, categoria]){
                            db.ProductosCategorias.create({
                                product_id: producto.id,
                                category_id:categoria.id
                        })
                        })
                    };
                    if (req.body.sinLactosa != undefined){
                        let pedidoProducto = db.Producto.findOne({
                            where: {codigo: req.body.codigoProduct}
                        })
                        let pedidoCategoria = db.Categoria.findOne({
                            where: {name: "filtroSinLactosa"}
                        })
                        Promise.all([pedidoProducto, pedidoCategoria])
                        .then(function([producto, categoria]){
                            db.ProductosCategorias.create({
                                product_id: producto.id,
                                category_id:categoria.id
                        })
                        })
                    };
                })*/
                .catch(function(e){
                    console.log(e)
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
                .catch(function(e){
                    console.log(e)
                });
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
                        if (prod.name.toLowerCase().includes(nombreBuscado.toLowerCase().trim()) || prod.short_description.toLowerCase().includes(nombreBuscado.toLowerCase().trim())) {
                            results.push(prod);
                        }
                    })
                    return res.render('listadoProductos', {productos: results});
                })
                .catch(function(e){
                    console.log(e)
                });
        },

        deleteProduct: function(req,res){

            db.Producto.destroy({
                where: {id: req.params.codigo}
            })
                .then(function(){
                    res.redirect("/productos");
                })
                .catch(function(e){
                    console.log(e)
                });
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
                    .catch(function(e){
                        console.log(e)
                    });
        },

        put_editProducto: function (req,res,next){

                db.Tienda.findOne({
                    where: {name: req.body.tienda}
                })
                    .then(function(tienda){
                        let errors = validationResult(req);
                        if (errors.isEmpty()){
                        db.Producto.update({
                            codigo: req.body.codigoProduct,
                            name: req.body.nombreProduct,
                            short_description: req.body.descCorta,
                            long_description: req.body.descLarga,
                            price: req.body.precio,
                            image: req.files[0].filename,
                            store_id: tienda.id,
                        }, {
                            where: {
                            id: req.params.codigo
                        }
                        })
                    }
                    })
                    .then(function(){
                        return res.redirect("/productos")
                    })
                    .catch(function(e){
                    console.log(e)
                    });
        },

        listadoTiendas: function (req,res){
            db.Tienda.findAll()
                .then(function(tiendas){
                    res.render('listadoTiendas', {tiendas: tiendas});
                })
                .catch(function(e){
                    console.log(e)
                });
        },

        get_searchTiendas: function (req,res){
            db.Tienda.findAll()
                .then(function(tiendas){
                    let nombreBuscado =  req.query.nombre;
                    let results = [];
                    tiendas.forEach((tiend, i) => {
                        if (tiend.name.toLowerCase().includes(nombreBuscado.toLowerCase().trim()) || tiend.description.toLowerCase().includes(nombreBuscado.toLowerCase().trim())) {
                            results.push(tiend);
                        }
                    })
                    return res.render('listadoTiendas', {tiendas: results});
                })
                .catch(function(e){
                    console.log(e)
                });
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
                .then(function(){
                res.redirect('/productos/tiendas');
                })
                .catch(function(e){
                    console.log(e)
                });
            },


        get_editTienda: function(req,res){

            db.Tienda.findByPk(req.params.codigo)
                .then(function(tienda){
                    return res.render('tiendaEdit', {tienda: tienda});
                })
                .catch(function(e){
                    console.log(e)
                });
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
                .catch(function(e){
                    console.log(e)
                });
        },

        deleteTienda: function(req,res){

            db.Tienda.destroy({
                where: {id: req.params.codigo}
            })
                .then(function(){
                    res.redirect("/productos/tiendas");
                })
                .catch(function(e){
                    console.log(e)
                });
            },
    }

    module.exports = productosController;

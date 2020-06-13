const productosController = {

    detalle: function (req,res){
        res.send('este es el detalle del producto' + ' ' + req.params.idproducto);
    },

    }

    module.exports = productosController
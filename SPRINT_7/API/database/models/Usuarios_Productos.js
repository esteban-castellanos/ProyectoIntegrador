module.exports = (sequelize, dataTypes) => {

    let alias = "UsuariosProductos";
    let cols = {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        user_id: {
            type: dataTypes.INTEGER
        },
        quantity: {
            type:dataTypes.INTEGER
        },
        order_number: {
            type:dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "users_products",
        timestamps: false,
    };

    const UsuariosProductos = sequelize.define(alias, cols, config);

    return UsuariosProductos;

};
module.exports = (sequelize, dataTypes) => {

    let alias = "ProductosCategorias";
    let cols = {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        category_id: {
        type: dataTypes.INTEGER
    },
    }

    let config = {
        tableName: "products_categories",
        timestamps: false,
    };

    const ProductosCategorias = sequelize.define(alias, cols, config);

    return ProductosCategorias;

};
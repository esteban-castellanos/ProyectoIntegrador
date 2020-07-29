module.exports = (sequelize, dataTypes) => {

    let alias = "Categoria";
    let cols = {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        name: {
            allowNull: false,
            type: dataTypes.STRING,
        },
    }

    let config = {
        tableName: "categories",
        timestamps: false,
    };

    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function(models){
        Categoria.belongsToMany(models.Producto, {
            as: "productos",
            through: "products_categories",
            foreignKey: "category_id",
            otherKey: "product_id",
            timestamps: false,
        });
    }

    return Categoria;

}
module.exports = (sequelize, dataTypes) => {

    let alias = "Usuario";
    let cols = {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        first_name: {
            allowNull: false,
            type: dataTypes.STRING,
        },
        last_name: {
            allowNull: false,
            type: dataTypes.STRING,
        },
        email: {
            allowNull: false,
            type: dataTypes.STRING
        },
        password: {
            allowNull: false,
            type: dataTypes.STRING
        },
        category: {
            allowNull: false,
            type: dataTypes.STRING
        },
    }

    let config = {
        tableName: "users",
        timestamps: false,
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models){
        Usuario.belongsToMany(models.Producto, {
            as: "productos",
            through: "users_products",
            foreignKey: "user_id",
            otherKey: "product_id",
            timestamps: false,
        });
    }
    return Usuario;
}



module.exports = (sequelize, dataTypes) => {

    let alias = "Tienda";
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
        description: {
            type: dataTypes.STRING,
        },
        image: {
            type: dataTypes.STRING,
            allowNull: false,
        },
    }

    let config = {
        tableName: "stores",
        timestamps: false,
    };

    const Tienda = sequelize.define(alias, cols, config);

    Tienda.associate = function(models){
        Tienda.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'store_id'
        })
    }
    return Tienda;
}
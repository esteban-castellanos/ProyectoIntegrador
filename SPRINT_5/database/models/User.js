const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {

    let alias = "users";
    let cols = {

id: {
autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
},
first_name: {
    allowNull: false,
    type: DataTypes.STRING,
},
last_name: {
    allowNull: false,
    type: DataTypes.STRING,
},
email: {


},
password: {

},
category: {

},

}

let config = {
    tableName: "users",
    timestamps: false,
};

const User = sequelize.define(alias, cols, config);

User.associate = function(models){
    User.belongsToMany(models.users, {
        as: "compras",
        through: "users_products",
        foreignKey: "user_id",
        otherKey: "product_id",
        timestamps: false,
    });
}

return User;

}



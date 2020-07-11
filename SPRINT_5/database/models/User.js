const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {

    let alias = "user";
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
    tableName: "user",
    timestamps: false,
};

const User = sequelize.define(alias, cols, config);

return User;

}



const { DataTypes } = require("sequelize");

// Table cine.users {
//   user_id int [pk, increment]
//   username varchar
//   email varchar
// }

module.exports = (sequelize) => {
  sequelize.define("Role", {
    role_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    code: {
      type: DataTypes.CHAR,
      unique: true, //No puede haber dos roles con el mismo codigo
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, //No puede haber dos roles con el mismo nombre
    },
  });
};

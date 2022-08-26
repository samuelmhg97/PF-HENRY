const { DataTypes } = require("sequelize");

// Table cine.users {
//   user_id int [pk, increment]
//   username varchar
//   email varchar
//   role_id int
// }

module.exports = (sequelize) => {
  sequelize.define("User", {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // colocada la constrain para garantizar que no haya correos repetidos (no se que tan ultil sea)
      validate: {
        isEmail: true, // valida que sea un correo correcto
      },
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

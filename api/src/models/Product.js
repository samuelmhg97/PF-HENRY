const { DataTypes } = require("sequelize");

// Table cine.products{
//     product_id int [pk, increment]
//     name varchar
//     stock integer
//     price float
//   }

module.exports = (sequelize) => {
  sequelize.define("Product", {
    product_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
      },
    },
    price: {
      type: DataTypes.FLOAT,
      validate: {
        isFloat: true,
      },
    },
  });
};

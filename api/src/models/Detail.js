const { DataTypes } = require("sequelize");

// Table purchase.detail{
//     detail_id int [pk, increment]
//     purchase_id <-- de la tabla de las compras
//     schedule_id <--- de la tabla de las proyecciones
//     quantity  <-- cantidad de tickets
//     product_id <-- de la tabla de productos
//     quantity_product <-- cantidad de productos comprados
//   }

module.exports = (sequelize) => {
  sequelize.define("Detail", {
    detail_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    purchase_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    schedule_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
    },
    product_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
  });
};

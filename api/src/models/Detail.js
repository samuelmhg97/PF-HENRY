const { DataTypes } = require('sequelize');

// Table purchease.detail{
//     detail_id int [pk, increment]
//     purchease_id <-- de la tabla de las compras
//     schedule_id <--- de la tabla de las proyecciones
//     quantity  <-- cantidad de tickes
//     product_id <-- de la tabla de productos
//     quantity_product <-- cantidad de productos comprados
//   }

module.exports = (sequelize) => {    
    sequelize.define('Detail', {
      detail_id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      purchease_id : {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      schedule_id : {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_id : {
        type: DataTypes.INTEGER,
      },
      product_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  };
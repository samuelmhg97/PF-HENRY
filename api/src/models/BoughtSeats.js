const { DataTypes } = require("sequelize");

// Table cine.bought_seats{
//     selection_id int [pk, increment]
//     seat_numbers schema
//     purchase_id int [ref: <> cine.purchases.purchase_id]
//   }
// estoy haciendo una prueb
module.exports = (sequelize) => {
  sequelize.define("BoughtSeats", {
    selection_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    seat_numbers: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    purchase_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

const { DataTypes } = require("sequelize");

// Table cine.rooms{
//     room_id int [pk, increment]
//     name varchar
//     seats_amount int
//     room_seats schema  <--- TRAE UN OBJETO CON LOS ASIENTOS¿?
//     display varchar  <--- ?? relaciono string
//   }

module.exports = (sequelize) => {
  sequelize.define("Room", {
    room_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    seats_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
    room_seats: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    display_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

const { DataTypes } = require("sequelize");

// Table cine.displays{
//     display_id int [pk, increment]
//     description varchar
//   }

module.exports = (sequelize) => {
  sequelize.define("Display", {
    display_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

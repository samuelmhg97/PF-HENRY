const { DataTypes } = require("sequelize");

// Table cine.genres{
//     genre_id int [pk, increment]
//     name varchar
//   }

module.exports = (sequelize) => {
  sequelize.define("Genre", {
    genre_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

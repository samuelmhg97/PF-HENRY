const { DataTypes } = require('sequelize');

// Table cine.movies{
//   movie_id int [pk, increment]
//   title varchar
//   description varchar
//   poster varchar
//   duration int
//   classification varchar
//   cast schema
//   director varchar
//   writter varchar
//   language varchar
//   display_id int [ref: <> cine.displays.description] <--- lo vemos en las relaciones
// }

module.exports = (sequelize) => {
  sequelize.define('Movie', {
    movie_id : {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    classification: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cast: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    writter: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};

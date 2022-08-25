const { DataTypes } = require("sequelize");

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
  sequelize.define("Movie", {
    movie_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false, // Se eliminaron las lineas de allowNull: true porque es el valor por defecto
    },
    description: {
      type: DataTypes.TEXT,
    },
    poster: {
      type: DataTypes.STRING,
      validate: {
        // asi no hay que cargar el elemento en ninguna parte, solo se llama de otro sitio
        isUrl: true,
      },
    },
    teaser: {
      type: DataTypes.STRING,
      validate: {
        // asi no hay que cargar el elemento en ninguna parte, solo se llama de otro sitio
        isUrl: true,
      },
    },
    duration: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true,
      },
    },
    classification: {
      type: DataTypes.STRING,
    },
    cast: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    director: {
      type: DataTypes.STRING,
    },
    writter: {
      type: DataTypes.STRING,
    },
    language: {
      type: DataTypes.STRING,
    },
  });
};

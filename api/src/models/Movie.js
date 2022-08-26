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

const genre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Sport",
  "Thriller",
  "War",
  "Western",
];

const display = ["2D", "3D", "4DX", "IMAX"];

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
    genre: {
      type: DataTypes.ARRAY(DataTypes.ENUM(genre)),
    },
    display: {
      type: DataTypes.ARRAY(DataTypes.ENUM(display)),
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

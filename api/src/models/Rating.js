const { DataTypes } = require('sequelize');

// Table cine.movie_ratings{
//     rating_id int [pk, increment]
//     movie_id int [ref: <> cine.movies.movie_id]
//     user_id int [ref: <> cine.users.user_id]
//     rate int  <-- ENTRE 0 Y 5
//     comment_id int [ref: <> cine.comments.description]  <-- en vez de tabla aparte, pondria todo junto ¿?¿??
//   }

module.exports = (sequelize) => {    
    sequelize.define('Rating', {
      rating_id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      movie_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,        
      },
      rate: {
        type: DataTypes.INTEGER,        
      },
      review: {
        type: DataTypes.TEXT,        
      }
    });
  };
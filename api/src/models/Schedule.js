const { DataTypes } = require("sequelize");

// Table cine.schedules {
//     schedule_id int [pk, increment]
//     day date
//     time time
//     room_id int [ref: <> cine.rooms.room_id]
//     movie_id int [ref: <> cine.movies.movie_id]
//     room_seats schema [ref: <> cine.rooms.room_seats]  <--- trae este dato con el room id
//     display varchar [ref: <> cine.rooms.display]  <-- trae este dato con el room id ?
//     active bool
//   }

module.exports = (sequelize) => {
  sequelize.define("Schedule", {
    schedule_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    day: {
      type: DataTypes.DATEONLY, // Se cambió DATE por DATEONLY para guardar solo la fecha
      allowNull: false,
      // validate: {           // verificar como funciona este validador.
      //   isDate: true,
      // }
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
};

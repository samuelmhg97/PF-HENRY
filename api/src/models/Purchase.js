const { DataTypes } = require("sequelize");

// Table cine.purchases{
//     purchase_id int
//     email int [ref: <> cine.users.email]     <--- user_id??
//     purchase_date date  <-- DATE trae fecha y hora
//     purchase_time time
//     schedule_id int [ref: <> cine.schedules.schedule_id]  <---- EN TABLA DETALLE DE COMPRA¿?¿?
//     amount float
//     status_id int [ref: <> cine.purchases_status.status_id] <---
//   }

module.exports = (sequelize) => {
  sequelize.define("Purchase", {
    purchase_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date_time: {
      type: DataTypes.DATE,
      allowNull: false,
      // validate: {      // verificar como funciona este validador.
      //   isDate: true,
      // }
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: true,
      },
    },
    status_id: {
      type: DataTypes.INTEGER,
    },
  });
};

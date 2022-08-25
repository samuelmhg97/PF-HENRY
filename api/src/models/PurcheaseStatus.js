const { DataTypes } = require('sequelize');

// Table purchease.status{
//     status_id int [pk, increment]
//     decription varchar
//   }

module.exports = (sequelize) => {    
    sequelize.define('Status', {
      status_id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      decription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  };
const { DataTypes } = require('sequelize');

// Table cine.users {
//   user_id int [pk, increment]
//   username varchar
//   email varchar
// }

module.exports = (sequelize) => {    
    sequelize.define('User', {
      user_id : {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,        
      }
    });
  };
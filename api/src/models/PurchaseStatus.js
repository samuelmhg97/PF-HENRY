const { DataTypes } = require("sequelize");

// Table purchase.status{
//     status_id int [pk, increment]
//     description varchar
//   }

module.exports = (sequelize) => {
  sequelize.define("PurchaseStatus", {
    status_id: {
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

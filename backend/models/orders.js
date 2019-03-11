module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    meal: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    totalCost: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    location: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {});
  // Orders.associate = function (models) {
  //   // associations can be defined here
  // };
  return Orders;
};

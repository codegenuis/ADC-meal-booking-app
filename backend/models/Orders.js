module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('orders', {
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
  Orders.associate = (models) => {
    // associations can be defined here
    Orders.belongsTo(models.users, {
      foreignKey: {
        name: 'userId',
        field: 'user_id',
        onDelete: 'CASCADE',
      },
      as: 'user',
    });
  };
  return Orders;
};

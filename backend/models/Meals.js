module.exports = (sequelize, DataTypes) => {
  const Meals = sequelize.define('meals', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      defaultValue: 'https://res.cloudinary.com/dikaeinstein/image/upload/c_scale,q_auto:low,w_1029/v1525566673/book-a-meal/avocado-cooked-delicious-262959.jpg',
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {});
  // Meals.associate = (models) => {
  //   // associations can be defined here
  //   Meals.belongsTo(models.Orders, {
  //     foreignKey: {
  //       name: 'orderId',
  //       field: 'order_id',
  //       onDelete: 'CASCADE',
  //     },
  //     as: 'user',
  //   });
  // };
  return Meals;
};

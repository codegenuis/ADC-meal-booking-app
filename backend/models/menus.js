module.exports = (sequelize, DataTypes) => {
  const Menus = sequelize.define('menus', {
    menu: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    menu_id: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {});
  Menus.associate = (models) => {
    // associations can be defined here
    Menus.hasMany(models.meals, {
      foreignKey: {
        name: 'mealId',
        field: 'meal_id',
        onDelete: 'CASCADE',
      },
      as: 'meal',
    });
  };
  return Menus;
};

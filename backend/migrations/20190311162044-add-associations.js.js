module.exports = {
  up: (queryInterface, Sequelize) => (
    queryInterface.addColumn(
      'orders',
      'order_id',
      {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
      },
      'user_id',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'users', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onDelete: 'CASCADE',
      },
    )
      .then(() => (
        queryInterface.addColumn(
          'meals',
          'meal_id',
          {
            type: Sequelize.INTEGER,
            references: {
              model: 'meals', // name of Target model
              key: 'id', // key in Target model that we're referencing
            },
            onDelete: 'CASCADE',
          },
        )
      ))
    /* eslint no-console: 0 */
      .catch(err => console.log(err))
  ),
  down: (queryInterface, Sequelize) => (
    queryInterface.removeColumn(
      'orders',
      'order_id',
      'user_id',
    )
  ),
};

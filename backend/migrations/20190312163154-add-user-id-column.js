module.exports = {
  up: (queryInterface, Sequelize) => (
    queryInterface.addColumn(
      'orders',
      'user_id',
      {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
      },
    )
    /* eslint no-console: 0 */
      .catch(err => console.log(err))
  ),
  down: (queryInterface, Sequelize) => (
    queryInterface.removeColumn(
      'orders',
      'user_id',
    )
  ),
};

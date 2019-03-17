module.exports = {
  up: (queryInterface, Sequelize) => (
    queryInterface.addColumn(
      'orders',
      'location',
      {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
      },
    )
  ),
  down: (queryInterface, Sequelize) => (
    queryInterface.removeColumn(
      'orders',
      'location',
    )
  ),
};

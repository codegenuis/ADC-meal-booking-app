module.exports = {
  up: (queryInterface, Sequelize) => (
    queryInterface.addColumn(
      'orders',
      'location',
      {
        type: Sequelize.TEXT,
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

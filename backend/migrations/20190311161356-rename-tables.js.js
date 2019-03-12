module.exports = {
  up: (queryInterface, Sequelize) => (
    queryInterface.renameTable('Meals', 'meals')
      .then(() => {
        queryInterface.renameTable('Orders', 'orders');
      })
  ),
};

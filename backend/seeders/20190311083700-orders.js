module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('Orders', [{
    name: 'Charles osegi',
    meal: "[{name: 'Coconut Rice',quantity: '2 plates',price: '1000',currency: 'NGN'}]",
    totalCost: '1000',
    createdAt: '2019-03-08 16:41:12',
    updatedAt: '2019-03-08 16:41:12',
    location: 'Ikeja',
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Orders', null, {}),
};

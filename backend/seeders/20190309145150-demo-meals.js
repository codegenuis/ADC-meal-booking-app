'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

    */
      return queryInterface.bulkInsert('Meals', [{
        name: 'Ofada Rice',
        price: '500',
        currency: 'NGN',
        createdAt: '2019-03-08 16:41:12',
        updatedAt: '2019-03-08 16:41:12'
      },
    {
      name: 'Fried Rice',
      price: '500',
      currency: 'NGN', 
      createdAt: '2019-03-08 16:46:12',
      updatedAt: '2019-03-08 16:46:12'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Meals', null, {});
  }
};

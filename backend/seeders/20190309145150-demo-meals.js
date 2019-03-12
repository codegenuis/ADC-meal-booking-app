module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('meals', [{
      name: 'Ofada Rice',
      price: '500',
      currency: 'NGN',
      createdAt: '2019-03-08 16:41:12',
      updatedAt: '2019-03-08 16:41:12',
    },
    {
      name: 'Fried Rice',
      price: '500',
      currency: 'NGN',
      createdAt: '2019-03-08 16:46:12',
      updatedAt: '2019-03-08 16:46:12',
    }], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('meals', null, {});
  }
};

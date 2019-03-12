module.exports = {
  up: queryInterface => queryInterface.bulkInsert('menus', [{
    menu: "[{name: 'Jollof Rice',price: '500',currency: 'NGN',menu_id:1 },{name: 'Fried Rice',size: 'plates',price: '500',currency: 'NGN',menu_id:2},{id: 3,name: 'Coconut Rice',size: 'plates',price: '500',currency: 'NGN',menu_id:3}]",
    createdAt: '2019-03-08 16:41:12',
    updatedAt: '2019-03-08 16:41:12',
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('menus', null, {}),
};

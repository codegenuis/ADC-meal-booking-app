import models from '../models';

export default class OrderService {
  constructor() {
    this.Orders = models.Orders;
  }

  getAll() {
    // This will be a call to our ORM
    // And some manipulations to make the data presentable.
    return this.Orders.findAll();
  }

  addOrder(order) {
    return this.Orders.create(order);
  }

  editOrder(order, id) {
    return this.Orders.update(order, { returning: true, where: { id } });
  }

  deleteOrder(id) {
    return this.Orders.destroy({
      where: { id },
    });
  }
}

import models from '../models';

export default class MenuService {
  constructor() {
    this.Menus = models.menus;
  }


  getAll() {
    // This will be a call to our ORM
    // And some manipulations to make the data presentable.
    return this.Menus.findAll();
  }

  addMenu(menu) {
    return this.Menus.create(menu);
  }
}

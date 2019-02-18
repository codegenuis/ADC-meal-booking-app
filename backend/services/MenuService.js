import Menu from '../models/Menu';
import dummyData from '../utils/dummyData';

export default class MenuService {
  constructor() {
    this.menu = dummyData.menu;
  }

  fetchAllMeals() {
    // When we retrieve the data, it will be of type Meals
    // Hence, this simulation here.
    return this.menu.map((data) => {
      const menu = new Menu();
      menu.id = data.id;
      menu.name = data.name;
      menu.size = data.size;
      menu.price = data.price;
      menu.currency = data.currency;
      return menu;
    });
  }

  getAll() {
    // This will be a call to our ORM
    // And some manipulations to make the data presentable.
    return this.fetchAllMeals();
  }

  addMeal(menu) {
    this.menu.push(menu);
    return this.menu;
  }
}

import models from '../models';

export default class MealsService {
  constructor() {
    this.Meals = models.Meals;
  }

  getAll() {
    // Call to ORM
    return this.Meals.findAll();
  }

  get(id) {
    // -1 because we have our data in an array which starts at 0
    return this.fetchAllMeals()[id - 1];
  }

  addMeal(meal) {
    return this.Meals.create(meal);
  }

  editMeal(meal, id) {
    return this.Meals.update(meal, { returning: true, where: { id } });
  }

  deleteMeal(id) {
    return this.Meals.destroy({
      where: { id },
    });
  }
}

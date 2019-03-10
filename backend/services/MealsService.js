import models from '../models';

const { Meals } = models

export default class MealsService {
  constructor() {
  }

  getAll() {
     // Call to ORM
     return Meals.findAll()
  }

  get(id) {
    // -1 because we have our data in an array which starts at 0
    return this.fetchAllMeals()[id - 1];
  }

  addMeal(meal) {
    this.meals.push(meal);
    return meal;
  }

  editMeal(meal, id) {
    const updatedMeal = this.meals.find(data => data.id === Number(id));
    updatedMeal.name = meal.name;
    updatedMeal.price = meal.price;
    updatedMeal.size = meal.size;
    updatedMeal.currency = meal.currency;
    return meal;
  }

  deleteMeal(id) {
    const deleteMeal = this.meals.find(meal => meal.id === Number(id));
    const index = this.meals.indexOf(deleteMeal);
    if (index > -1) {
      this.meals.splice(index, 1);
    }
    return this.meals;
  }
}

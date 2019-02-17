/* eslint-disable no-param-reassign */
import Meals from '../models/Meals';
import dummyData from '../utils/dummyData';

export default class MealsService {
  constructor() {
    this.meals = dummyData.meals;
  }

  fetchAllMeals() {
    // When we retrieve the data, it will be of type Meals
    // Hence, this simulation here.
    return this.meals.map((data) => {
      const meal = new Meals();
      meal.id = data.id;
      meal.name = data.name;
      meal.size = data.size;
      meal.price = data.price;
      meal.currency = data.currency;
      return meal;
    });
  }

  getAll() {
    // This will be a call to our ORM
    // And some manipulations to make the data presentable.
    return this.fetchAllMeals();
  }

  get(id) {
    // -1 because we have our data in an array which starts at 0
    return this.fetchAllMeals()[id - 1];
  }

  addMeal(meal) {
    this.meals.push(meal);
    return this.meals;
  }

}

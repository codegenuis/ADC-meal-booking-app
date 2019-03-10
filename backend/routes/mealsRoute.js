import express from 'express';
import MealsService from '../services/MealsService';

const mealsService = new MealsService();

const router = express.Router();
router.get('/', (req, res) => {
  mealsService.getAll().then(meals => {
    res.status(200)
    res.json(meals)
  })
  .catch(error => console.log(error))
});

router.post('/add', (req, res) => {
  res.status(200);
  res.json({
    message: 'Meal successfully added!',
    data: mealsService.addMeal(req.body),
  });
});

router.put('/edit/:id', (req, res) => {
  res.status(200);
  res.json({
    message: 'Meal updated!',
    data: mealsService.editMeal(req.body, req.params.id),
  });
});

router.delete('/delete/:id', (req, res) => {
  res.status(200);
  res.json({
    message: 'Meal Deleted!',
    data: mealsService.deleteMeal(req.params.id)
  })
});

export default router;

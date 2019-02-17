import express from 'express';
import MealsService from '../services/MealsService';

const mealsService = new MealsService();

const router = express.Router();
router.get('/', (req, res) => {
  res.status(200);
  res.json({
    message: 'success',
    data: mealsService.getAll(),
  });
});

router.post('/add', (req, res) => {
  res.status(201);
  res.json({
    message: 'new meal added',
    data: mealsService.addMeal(req.body),
  });
});

router.put('/edit/:id', (req, res) => {
  res.send(mealsService.editMeal(req.body, req.params.id)).status(200);
});

router.delete('/delete/:id', (req, res) => {
  res.send(mealsService.deleteMeal(req.params.id)).status(200);
});

export default router;

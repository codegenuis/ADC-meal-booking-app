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

export default router;

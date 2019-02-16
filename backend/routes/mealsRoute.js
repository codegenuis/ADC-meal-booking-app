import express from 'express';
import MealsService from '../services/MealsService';

const mealsService = new MealsService();

const router = express.Router();
router.get('/', (req, res) => {
  res.status(200).send(mealsService.getAll());
});

export default router;

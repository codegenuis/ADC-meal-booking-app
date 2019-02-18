import express from 'express';
import MenuService from '../services/MenuService';

const menuService = new MenuService();

const router = express.Router();
router.get('/', (req, res) => {
  res.status(200);
  res.json({
    message: 'success',
    data: menuService.getAll(),
  });
});

router.post('/add', (req, res) => {
  res.status(201);
  res.json({
    message: 'new meal added',
    data: menuService.addMeal(req.body),
  });
});

export default router;

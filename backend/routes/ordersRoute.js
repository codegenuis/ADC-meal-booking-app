import express from 'express';
import OrderService from '../services/OrderService';

const ordersService = new OrderService();

const router = express.Router();
router.get('/', (req, res) => {
  res.status(200);
  res.json({
    message: 'success',
    data: ordersService.getAll(),
  });
});

router.post('/add', (req, res) => {
  res.status(201);
  res.json({
    message: 'new meal added',
    data: ordersService.addOrder(req.body),
  });
});

router.put('/edit/:id', (req, res) => {
  res.send(ordersService.editOrder(req.body, req.params.id)).status(200);
});


router.delete('/delete/:id', (req, res) => {
  res.send(ordersService.deleteMeal(req.params.id)).status(200);
});

export default router;

import express from 'express';
import OrderService from '../services/OrderService';

const ordersService = new OrderService();

const router = express.Router();
router.get('/', (req, res) => {
  res.status(200).send(ordersService.getAll());
});

router.post('/add', (req, res) => {
  res.status(200);
  res.json({
    message: 'Order successfully created!',
    data: ordersService.addOrder(req.body),
  });
});

router.put('/edit/:id', (req, res) => {
  res.status(200);
  res.json({
    message: 'Order updated!',
    data: ordersService.editOrder(req.body, req.params.id),
  });
});


router.delete('/delete/:id', (req, res) => {
  res.status(200);
  res.json({
    message: 'Order Deleted!',
    data: ordersService.deleteOrder(req.params.id),
  });
});

export default router;

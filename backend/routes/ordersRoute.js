import express from 'express';
import OrderService from '../services/OrderService';

const ordersService = new OrderService();

const router = express.Router();
router.get('/', (req, res) => {
  ordersService.getAll()
    .then((orders) => {
      res.status(200);
      res.json(orders);
    })
    .catch(error => console.log(error));
});

router.post('/add', (req, res) => {
  ordersService.addOrder(req.body)
    .then((order) => {
      res.status(200);
      res.json({
        message: 'Order successfully created!',
        data: order,
      });
    })
    .catch(error => console.log(error));
});

router.put('/edit/:id', (req, res) => {
  ordersService.editOrder(req.body, req.params.id)
    .then(([rowsUpdated, [updatedMeal]]) => {
      if (rowsUpdated === 1) {
        res.status(200);
        res.json({
          message: 'Order updated!',
          data: updatedMeal,
        });
      } else {
        res.status(400);
        res.json({ message: 'Order not found!' });
      }
    })
    .catch(error => console.log(error));
});


router.delete('/delete/:id', (req, res) => {
  res.status(200);
  res.json({
    message: 'Order Deleted!',
  });
});

export default router;

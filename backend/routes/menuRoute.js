import express from 'express';
import MenuService from '../services/MenuService';

const menuService = new MenuService();

const router = express.Router();
router.get('/', (req, res) => {
  menuService.getAll()
    .then((menus) => {
      res.status(200);
      res.json(menus);
    })
    .catch(error => console.log(error));
});

router.post('/add', (req, res) => {
  menuService.addMenu(req.body)
    .then((menu) => {
      res.status(200);
      res.json({
        message: 'Menu successfully added!',
        data: menu,
      });
    });
});

export default router;

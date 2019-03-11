import express from 'express';
import MealsService from '../services/MealsService';

const mealsService = new MealsService();

const router = express.Router();
router.get('/', (req, res) => {
  mealsService.getAll().then((meals) => {
    res.status(200);
    res.json(meals);
  })
    .catch(error => console.log(error));
});

router.post('/add', (req, res) => {
  mealsService.addMeal(req.body).then((meal) => {
    res.status(200);
    res.json({
      message: 'Meal successfully added!',
      data: meal,
    });
  })
    .catch(error => console.log(error));
});

router.put('/edit/:id', (req, res) => {
  mealsService.editMeal(req.body, req.params.id)
    .then(([rowsUpdated, [updatedMeal]]) => {
      if (rowsUpdated === 1) {
        res.status(200);
        res.json({
          message: 'Meal updated!',
          data: updatedMeal,
        });
      } else {
        res.status(400);
        res.json({ message: 'Meal not found!' });
      }
    })
    .catch(error => console.log(error));
});

router.delete('/delete/:id', (req, res) => {
  mealsService.deleteMeal(req.params.id)
    .then((mealDeleted) => {
      if (mealDeleted === 1) {
        res.status(200);
        res.json({
          message: 'Meal Deleted!',
        });
      } else {
        res.status(400);
        res.json({ message: 'Meal not found!' });
      }
    });
});

export default router;

import express from 'express';
import mealsRoute from './routes/mealsRoute';

const app = express();
const port = 8080;

app.use('/api/v1/meals', mealsRoute);

app.listen(port);

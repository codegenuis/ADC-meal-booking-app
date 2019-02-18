import express from 'express';
import bodyParser from 'body-parser';
import mealsRoute from './routes/mealsRoute';
import ordersRoute from './routes/ordersRoute';

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.use('/api/v1/meals', mealsRoute);
app.use('/api/v1/orders', ordersRoute);

app.listen(port);

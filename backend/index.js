import express from 'express';
import bodyParser from 'body-parser';
import mealsRoute from './routes/mealsRoute';
import ordersRoute from './routes/ordersRoute';
import menuRoute from './routes/menuRoute';


const app = express();
const port = 8080;

app.use(bodyParser.json());

app.use('/api/v1/meals', mealsRoute);
app.use('/api/v1/orders', ordersRoute);
app.use('/api/v1/menu', menuRoute);

app.listen(port);

export default app

import express from 'express';
import bodyParser from 'body-parser';
import mealsRoute from './routes/mealsRoute';

const app = express();
const port = 8080;

app.use(bodyParser.json());

app.use('/api/v1/meals', mealsRoute);

app.listen(port);

import express, { json } from 'express';
import users from './usersRoutes.mjs';

const app = express();

app.use(json());

export default (app) => {
  app.use(json());
  app.use(users);
  app.get('/', (req, res) => res.send('API Burguer Queen'));
};

// quando fala que esse arquivo servirá como um intermediário, significa um middleware?

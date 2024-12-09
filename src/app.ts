import express from 'express';
import cors from 'cors';
import { initializeDataSource } from './database/DataSource';
import { routes } from './routes';

const corsOptions = {
  origin: 'http://localhost:8080',
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
};

const app = express();

initializeDataSource();

app.use(express.json());
app.use(cors(corsOptions));
app.use(routes);

export { app };

import express from 'express';
import cors from 'cors';
import { initializeDataSource } from './database/DataSource';
import { routes } from './routes';

const app = express();

initializeDataSource();

app.use(express.json());
app.use(cors());
app.use(routes);

export { app };

import express from 'express';
import router from './routes';
import cors from 'cors';
import 'dotenv/config';

const app = express();

app.use(cors({
  origin: process.env.ORIGIN_CORS,
  optionsSuccessStatus: 200
}))
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(router);

export default app;
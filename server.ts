import express from 'express';
import dotenv from 'dotenv';
import config from './config/config';
import {
	adminRouter,
	rootRouter,
} from './routers';
import dbConnect from './utils/dbConnect';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();

app.use(express.json());
app.use(
	cors({
		origin: config.frontend_url,
		credentials: true,
	})
);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Middlewares
app.use('/', rootRouter);
app.use('/admin', adminRouter);

dbConnect(config.db);
app.listen(config.port, () =>
	console.log(`Server running on port ${config.port}`)
);
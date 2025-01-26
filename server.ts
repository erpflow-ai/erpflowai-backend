import express from 'express';
import dotenv from 'dotenv';
import config from './config/config';
import {
	adminRouter,
	rootRouter,
	genaiRouter,
	dashboardRouter,
	clientRouter,
} from './routers';
import dbConnect from './utils/dbConnect';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();

app.use(express.json({ limit: '100mb' }));
app.use(cors());
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(cookieParser());

app.use('/', rootRouter);
app.use('/admin', adminRouter);
app.use('/gen', genaiRouter);
app.use('/dashboard', dashboardRouter);
app.use('/client', clientRouter);

dbConnect(config.db);
app.listen(config.port, () =>
	console.log(`Server running on port ${config.port}`)
);

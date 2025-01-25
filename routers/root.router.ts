import { Request, Response, Router } from 'express';
import mongoose from 'mongoose';

const rootRouter = Router();

rootRouter.get('/', (req: Request, res: Response) => {
	res.status(200).json({ status: 'OK', message: 'Server up and running' });
});

export default rootRouter;

import { Router } from 'express';
import { recieveData } from '../controllers/client/client.controller';
import isUserAuthenticated from '../middleware/auth/auth';

const clientRouter = Router();

clientRouter.post('/storeProject', isUserAuthenticated, recieveData);

export default clientRouter;

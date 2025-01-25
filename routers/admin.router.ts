import { Router } from 'express';
import { getClubs } from '../controllers/admin/admin.controller';
import isUserAuthenticated from '../middleware/auth/auth';

const adminRouter = Router();

adminRouter.get('/getClubs', isUserAuthenticated, getClubs);

export default adminRouter;

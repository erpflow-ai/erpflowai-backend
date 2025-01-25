import { Router } from 'express';
import { resolveRequirement } from '../controllers/genai/genai.controller';
import isUserAuthenticated from '../middleware/auth/auth';

const genaiRouter = Router();

genaiRouter.post('/construct', resolveRequirement);

export default genaiRouter;

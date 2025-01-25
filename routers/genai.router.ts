import { Router } from 'express';
import { resolveRequirement } from '../controllers/genai/genai.controller';
import isUserAuthenticated from '../middleware/auth/auth';
import { parseBase64ToWav } from '../controllers/genai/genai2.controller';

const genaiRouter = Router();

genaiRouter.post('/construct', resolveRequirement);
genaiRouter.post('/upload', parseBase64ToWav);
export default genaiRouter;

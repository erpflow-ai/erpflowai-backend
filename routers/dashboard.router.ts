import { Router } from 'express';
import { getAllProjects, updateProjects } from '../controllers/project/project.controller';
import { getAllWorkOrders } from '../controllers/workorder/workorder.controller';
const dashboardRouter = Router();

dashboardRouter.get('/projects', getAllProjects);
dashboardRouter.get('/update', updateProjects);

dashboardRouter.get('/workorders', getAllWorkOrders);
export default dashboardRouter;

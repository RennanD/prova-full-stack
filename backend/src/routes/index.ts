import { Router } from 'express';

import todoRoutes from './todos.routes';

const routes = Router();

routes.use('/tasks', todoRoutes);

export default routes;

import { Router } from 'express';

import TaskController from '../app/controllers/TaskController';

const todosRoutes = Router();

todosRoutes.post('/', TaskController.create);

export default todosRoutes;

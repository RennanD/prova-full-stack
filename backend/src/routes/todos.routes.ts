import { Router } from 'express';

import TaskController from '../app/controllers/TaskController';

const todosRoutes = Router();

todosRoutes.get('/', TaskController.list);
todosRoutes.post('/', TaskController.create);

export default todosRoutes;

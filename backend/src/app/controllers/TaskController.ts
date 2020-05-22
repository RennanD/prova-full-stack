import { Request, Response } from 'express';

import Task from '../models/Task';

import CreateTaskService from '../services/CreateTaskService';
import LisTasksService from '../services/ListTaksService';

class ToDoController {
  async list(request: Request, response: Response): Promise<Response<Task[]>> {
    const listTasks = new LisTasksService();

    const search_date: string = request.query.search_date as string;

    const tasks = await listTasks.execute({
      search_date,
    });

    return response.json(tasks);
  }

  async create(request: Request, response: Response): Promise<Response<Task>> {
    try {
      const createTask = new CreateTaskService();

      const task = await createTask.execute(request.body);

      return response.json(task);
    } catch (error) {
      return response.json({ error: 'Erro ao criar uma nova tarefa' });
    }
  }
}

export default new ToDoController();

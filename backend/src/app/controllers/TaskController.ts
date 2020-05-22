import { Request, Response } from 'express';

import Task from '../models/Task';

import CreateTaskService from '../services/CreateTaskRepository';

class ToDoController {
  async create(request: Request, response: Response): Promise<Response<Task>> {
    try {
      const createTask = new CreateTaskService();

      const task = await createTask.execute(request.body);

      // console.log(reques);

      return response.json(task);
    } catch (error) {
      console.log(error);

      return response.json({ error: 'Erro ao criar uma nova tarefa' });
    }
  }
}

export default new ToDoController();

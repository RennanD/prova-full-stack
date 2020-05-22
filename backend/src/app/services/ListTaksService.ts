import { getRepository } from 'typeorm';

import { parseISO } from 'date-fns';

import Task from '../models/Task';

interface Request {
  search_date: string;
}

class ListTasksService {
  public async execute({ search_date }: Request): Promise<Task[] | undefined> {
    const taskRepository = getRepository(Task);

    // const start_date = parseISO(search_date);

    const tasks = await taskRepository.find();

    return tasks;
  }
}

export default ListTasksService;

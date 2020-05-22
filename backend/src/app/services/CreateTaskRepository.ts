import { getRepository } from 'typeorm';

import Task from '../models/Task';
import Category from '../models/Category';

interface Request {
  title: string;
  description: string;
  start_date: Date;
  end_date?: Date;
  category: string;
}

class CreateTaskRepository {
  public async execute({
    start_date,
    category,
    ...rest
  }: Request): Promise<Task> {
    const taskRepository = getRepository(Task);
    const categoryRepository = getRepository(Category);

    let finalCategoryId = '';

    const existsCategory = await categoryRepository.findOne({
      where: { title: category },
    });

    if (existsCategory) {
      finalCategoryId = existsCategory.id;
    } else {
      const newCategory = categoryRepository.create({
        title: category,
      });

      await categoryRepository.save(newCategory);

      finalCategoryId = newCategory.id;
    }

    const task = taskRepository.create({
      start_date,
      category_id: finalCategoryId,
      ...rest,
    });

    return task;
  }
}

export default CreateTaskRepository;

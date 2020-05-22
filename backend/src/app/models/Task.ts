import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('tasks')
class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  category_id: string;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column('date')
  start_date: Date;

  @Column('date')
  end_date: Date;

  @CreateDateColumn()
  created_at: string;

  @UpdateDateColumn()
  updated_at: string;
}

export default Task;

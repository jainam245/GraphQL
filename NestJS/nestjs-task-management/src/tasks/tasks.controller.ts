import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { query } from 'express';
import { use } from 'passport';
import { title } from 'process';
import { GetUser } from 'src/auth/get-user.decorators';
import { User } from 'src/auth/user.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
  private logger = new Logger('TasksController');
  constructor(private tasksServices: TasksService) {}

  // Create Task
  @Post()
  createTask(
    @Body() createTaskDto: CreateTaskDto,
    @GetUser() user: User,
  ): Promise<Task> {
    this.logger.verbose(
      `User "${user.username}"creating a new task . Data: ${JSON.stringify(
        createTaskDto,
      )}`,
    );
    return this.tasksServices.createTask(createTaskDto, user);
  }

  // // Create Task
  // @Post()
  // createTask(@Body() createTaskDto: CreateTaskDto): Task {
  //   return this.tasksServices.createTask(createTaskDto);
  // }

  @Get('/:id')
  getTaskById(@Param('id') id: string, @GetUser() user: User): Promise<Task> {
    return this.tasksServices.getTasksById(id, user);
  }
  // // Get Id
  // @Get('/:id')
  // getTaskById(@Param('id') id: string): Task {
  //   return this.tasksServices.getTaskById(id);
  // }

  // // Filter
  @Get()
  getTasks(
    @Query() filterDto: GetTasksFilterDto,
    @GetUser() user: User,
  ): Promise<Task[]> {
    this.logger.verbose(
      `User "${user.username}" retrieving all tasks . Filters: ${JSON.stringify(
        filterDto,
      )}`,
    );
    return this.tasksServices.getTasks(filterDto, user);
  }

  // // Filter
  // @Get()
  // getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksServices.getTaskWithFilters(filterDto);
  //   } else {
  //     return this.tasksServices.getAllTasks();
  //   }
  // }

  // // Update Task
  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  // ): Task {
  //   const { status } = updateTaskStatusDto;
  //   return this.tasksServices.updateTaskStatus(id, status);
  // }

  // // Update Task
  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @GetUser() user: User,
    @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  ): Promise<Task> {
    const { status } = updateTaskStatusDto;
    return this.tasksServices.updateTaskStatus(id, status, user);
  }

  // Delete Task
  @Delete('/:id')
  deleteTask(@Param('id') id: string, @GetUser() user: User): Promise<void> {
    return this.tasksServices.deleteTask(id, user);
  }
  // // Delete Task
  // @Delete('/:id')
  // deleteTask(@Param('id') id: string): void {
  //   return this.tasksServices.deleteTask(id);
  // }
}

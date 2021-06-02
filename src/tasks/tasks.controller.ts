import { Controller, Delete, Get, Post, Put, Body, Param, Req, Res } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './interfaces/Task';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private tasksService: TasksService) {}
    
    @Get()
    getTasks() : Promise<Task[]> {
        return this.tasksService.getTasks();
    }
    
    @Get(':id')
    getTask(@Param('id') id) {
        return this.tasksService.getTask(id);
    }
    
    @Post()
    createTask(@Body() task: CreateTaskDto) : Promise<Task> {
        return this.tasksService.createTask(task);
    }
    
    @Put(':id')
    updateTask(@Body() task: CreateTaskDto, @Param('id') id): Promise<Task> {
        return this.tasksService.updateTask(id, task);
    }
    
    @Delete(':id')
    deleteTask(@Param('id') id): Promise<Task> {
        return this.tasksService.deleteTask(id);
    }
    
    // @Get()
    // getTasks(@Req() req, @Res() res) {
    //     return res.status(200).json({
    //         ok: true,
    //         msg: 'Hola mundo'
    //     });
    // } 

}

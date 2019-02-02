import * as ioc from '../../IoC/IoC-public';
import { iTask } from '../../services/types/backend-types';
import { TasksService } from '../../services/Tasks.service';
import { action, observable } from 'mobx';

console.log("executing TasksUser.vm.ts");

@ioc.bindToSelf
export class TasksVM {
    
    private tasksService: TasksService;

    @observable
    public currentUserTasks: iTask[];

    constructor(@ioc.inject(TasksService) tasksService: TasksService){
        this.tasksService = tasksService;
        this.loadCurrentUserTasks();
    }

    @action
    private async loadCurrentUserTasks(){
        this.currentUserTasks = await this.tasksService.getCurrentUserTasks();
    }
}
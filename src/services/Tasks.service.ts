import * as ioc from './../IoC/IoC-public';
import { ServiceBase } from './ServiceBase';
import { iTask } from './types/backend-types';

console.log("executing Tasks.service.ts");

@ioc.bindToSelf
export class TasksService extends ServiceBase{
       
    public getCurrentUserTasks(): Promise<iTask[]> {
        this.httpClient.doRequest();// http call arguments here
        return new Promise(function(resolve){
            setTimeout(() => resolve([{
                id: 1,
                name: "Showcase code-splitting can work with simplistic inversify scenario.", 
                isComplete: true
            },
            {
                id: 2,
                name: "Build awesome app.", 
                isComplete: false
            },
            {
                id: 3,
                name: "...", 
                isComplete: false
            },
            {
                id: 4,
                name: "PROFIT!", 
                isComplete: false
            }]), 1000);
        });
    }
}
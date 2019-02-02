import * as ioc from './../IoC/IoC-public';
import { ServiceBase } from './ServiceBase';
import { iUser } from './types/backend-types';

console.log("executing Users.service.ts");

@ioc.bindToSelf
export class UsersService extends ServiceBase {
        
    public getCurrentUser(): Promise<iUser> {
        this.httpClient.doRequest();// http call arguments here
        return new Promise(function(resolve){
            setTimeout(() => resolve({ 
                name: "Ivan Koshelev", 
                login: "jsmith"
            }), 1000);
        });
    }

}
import * as ioc from './../IoC/IoC-public';
import { HttpClient } from './HttpClient';
import { iUser } from './types/iUser';

console.log("executing Users.service.ts");

@ioc.bindToSelf
export class UsersService {
    
    private httpClient: HttpClient;

    constructor(@ioc.inject(HttpClient) httpClient: HttpClient){
        this.httpClient = httpClient;

    }
    
    public getCurrentUser(): Promise<iUser> {
        this.httpClient.doRequest();// http call arguments here
        return new Promise(function(resolve){
            setTimeout(() => resolve({ 
                name: "John", 
                login: "jsmith"
            }), 1000);
        });
    }

}
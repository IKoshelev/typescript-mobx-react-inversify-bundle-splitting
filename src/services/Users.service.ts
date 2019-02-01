import * as ioc from './../IoC/IoC-public';
import { HttpClient } from './HttpClient';
import { iUser } from './types/iUser';

@ioc.bindToSelf
export class UsersService {
    
    private httpClient: HttpClient;

    constructor(@ioc.inject(HttpClient) httpClient: HttpClient){
        this.httpClient = httpClient;

    }
    
    public getCurrentUser(): Promise<iUser> {
        return Promise.resolve({ 
                name: "John", 
                login: "jsmith"
            });
    }

}
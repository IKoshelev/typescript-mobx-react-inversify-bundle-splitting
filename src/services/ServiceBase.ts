import * as ioc from './../IoC/IoC-public';
import { HttpClient } from './HttpClient';

@ioc.bindToSelf
export class ServiceBase {

    protected httpClient: HttpClient;

    constructor(@ioc.inject(HttpClient) httpClient: HttpClient){
        this.httpClient = httpClient;
    }

}
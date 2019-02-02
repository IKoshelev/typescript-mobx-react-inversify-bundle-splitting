import * as ioc from './../IoC/IoC-public';

console.log("executing HttpClient.ts");

@ioc.bindToSelf
export class HttpClient {
    public doRequest(){

    }
}
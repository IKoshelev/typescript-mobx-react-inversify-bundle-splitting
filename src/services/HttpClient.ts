import * as ioc from './../IoC/IoC-public';

console.log("executing HttpClient.ts");

@ioc.bindToSelfSingleton
export class HttpClient {

    public constructor(){
        console.log("Constructing instance of HttpClient. This message should only appear once ever.");
    }

    public doRequest(){

    }
}
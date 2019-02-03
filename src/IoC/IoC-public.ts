import * as inversify from 'inversify';
import { defaultContainer } from './IoC-private';

console.log("executing IoC-public.ts");

export function bindToSelf(target: Function){
    inversify.injectable()(target);
    defaultContainer.bind(target).toSelf();
}

export function bindToSelfSingleton(target: Function){
    inversify.injectable()(target);
    defaultContainer.bind(target).toSelf().inSingletonScope();
}

export function getIocFactory<T>(target: inversify.interfaces.Newable<T>): () => T {
    return () => defaultContainer.get(target);
}

export * from 'inversify';
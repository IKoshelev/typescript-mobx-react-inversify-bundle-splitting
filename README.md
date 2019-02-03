This is a small showcase, how you can use InversifyJS and code splitting in Mobx MVVM while using React for views layer and composition.

More on code splitting:

https://webpack.js.org/guides/code-splitting/

https://mariusschulz.com/blog/code-splitting-a-typescript-application-with-import-and-webpack

### Quick demo:

Clone repo, run
```
npm install
npm start
```
navigate to localhost:50000/

![Code splitting demo](Code-split.png?raw=true "")

### Explanation

Project uses MVVM architecture with very simple IoC setup, which have proved successful in our enterprise application.
Every type, that needs to be injectable, registers itself with the default IoC container during its loading, dependencies are injected via constructor.   

```Typescript
import * as ioc from '../../IoC/IoC-public';
import { UsersService } from '../../services/Users.service';
import { action, observable } from 'mobx';

@ioc.bindToSelf //decorator registers this class with default IoC container
export class CurrentUserVM {
    
    private usersService: UsersService;

    // Dependencies are injected in constructor via class reference
    // During testing, constructor will be called direcly, mocks will be passed
    constructor(@ioc.inject(UsersService) usersService: UsersService){
        this.usersService = usersService;
        this.loadCurrentUser();
    }

    //...
}

```

Dependencies are always injected via constructor, except the very top of visual composition, where a strongly typed factory is used.

```Typescript
import { observer } from 'mobx-react';
import * as React from 'react';
import { CurrentUserVM } from './CurrentUser.vm';

import { getIocFactory } from '../../IoC/IoC-public';

@observer
export class CurrentUserComponent extends React.Component<{},{vm:CurrentUserVM}> {

    constructor(props:any){
        super(props);
        this.state = {
            vm: getIocFactory(CurrentUserVM)()
        }
    }

    //...
}
```

At the top level of the application, usually be a shell or router, components are loaded dynamically, thus splitting each top level component into its own mini-bundle. 

```Typescript
interface iSubcomponents {
    CurrentUserCmp?:React.ComponentClass;
    TasksCmp?:React.ComponentClass;
}

@observer
class MainView extends React.Component<{}, iSubcomponents> {

    constructor(props:{}){
        super(props);
        this.state = {};
    }

    async loadCurrentUserCmp(){
        // Dynamically load CurrentUser component
        var cmp = await import(/* webpackChunkName: "CurrentUser.component" */ './components/CurrentUser/CurrentUser.component')
        this.setState({CurrentUserCmp: cmp.CurrentUserComponent});
    }

    async loadTasksCmp(){
         // Dynamically load Tasks component
        var cmp = await import(/* webpackChunkName: "Tasks.component" */ './components/Tasks/Tasks.component')
        this.setState({TasksCmp: cmp.TasksComponent});
    }

    render() {
        return (
            <div>
                Welcome!
                <br/>  
                <br/>                
                { this.state.CurrentUserCmp
                    ? <this.state.CurrentUserCmp/>
                    : <button onClick={ () => this.loadCurrentUserCmp() }>Show user</button>}
                
                <br/> 
                { this.state.TasksCmp
                    ? <this.state.TasksCmp/>
                    : <button onClick={ () => this.loadTasksCmp() }>Show tasks</button>}

                <DevTools />
            </div>
        );
     }
};
```

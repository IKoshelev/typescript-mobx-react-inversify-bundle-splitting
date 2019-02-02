import "reflect-metadata";
import {observer} from 'mobx-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';

import {polyfill} from 'es6-promise';
polyfill();

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
        var cmp = await import(/* webpackChunkName: "CurrentUser.component" */ './components/CurrentUser/CurrentUser.component')
        this.setState({CurrentUserCmp: cmp.CurrentUserComponent});
    }

    async loadTasksCmp(){
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

ReactDOM.render(<MainView/>, document.getElementById('root'));

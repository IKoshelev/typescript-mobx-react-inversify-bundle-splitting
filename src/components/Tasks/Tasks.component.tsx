import { observer } from 'mobx-react';
import * as React from 'react';
import { TasksVM } from './Tasks.vm';

import { getIocFactory } from '../../IoC/IoC-public';

console.log("executing Tasks.component.tsx");

@observer
export class TasksComponent extends React.Component<{},{vm:TasksVM}> {

    constructor(props:any){
        super(props);
        this.state = {
            vm: getIocFactory(TasksVM)()
        }
    }

    render() {

        const tasksList = this.state.vm.currentUserTasks 
                            &&  this.state.vm.currentUserTasks.map((task) => {
                                return <div key={task.id}>
                                    <input type="checkbox" readOnly checked={task.isComplete}/>
                                    { task.name }
                                </div>;
                            });

        return <div>
                Tasks:&nbsp;
                { !tasksList
                    ?   "Loading"
                    :  tasksList
                }
                </div>;
    }
}
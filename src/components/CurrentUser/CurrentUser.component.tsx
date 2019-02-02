import { observer } from 'mobx-react';
import * as React from 'react';
import { CurrentUserVM } from './CurrentUser.vm';

import { getIocFactory } from '../../IoC/IoC-public';

console.log("executing CurrentUser.component.tsx");

@observer
export class CurrentUserComponent extends React.Component<{},{vm:CurrentUserVM}> {

    constructor(props:any){
        super(props);
        this.state = {
            vm: getIocFactory(CurrentUserVM)()
        }
    }

    render() {

        return <div>
                Current user:&nbsp;
                { !this.state.vm.currentUser 
                    ?   "Loading"
                    :   this.state.vm.currentUser.name
                }
            </div>;
    }
}
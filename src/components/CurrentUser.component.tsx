import { observer } from 'mobx-react';
import * as React from 'react';
import { CurrentUserVM } from './CurrentUser.vm';

import { getIocFactory } from './../IoC/IoC-public';

var vm = getIocFactory(CurrentUserVM)();

/* interface ICurrentUserComponentProps { 
    vm: CurrentUserMM
} */

@observer
export class CurrentUserComponent extends React.Component/* <ICurrentUserComponentProps> */ {

    // constructor(props:ICurrentUserComponentProps) {
    //     super(props);
    //     this.state = {};
    // }

    render() {

        //const vm = this.props.vm;

        return <div>
                { !vm.currentUser && "Not loaded" }
                { vm.currentUser && (
                    <div>
                        Current user: 
                        <div>{ vm.currentUser.name }</div>
                    </div>) }
              
            </div>;
    }
}
import { observer } from 'mobx-react';
import * as React from 'react';
import { CurrentUserVM } from './CurrentUser.vm';

import { getIocFactory } from './../IoC/IoC-public';

console.log("executing CurrentUser.component.tsx");

var vm = getIocFactory(CurrentUserVM)();

@observer
export class CurrentUserComponent extends React.Component/* <ICurrentUserComponentProps> */ {

    render() {

        return <div>
                Current user:&nbsp;
                { !vm.currentUser 
                    ?   "Loading"
                    :   vm.currentUser.name
                }
            </div>;
    }
}
import {observable} from 'mobx';
import "reflect-metadata";
import {observer} from 'mobx-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';
import { getIocFactory } from './IoC/IoC-public';
import { CurrentUserComponent } from './components/CurrentUser.component';


@observer
class MainView extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                Welcome!
                <CurrentUserComponent/>
                <DevTools />
            </div>
        );
     }
};

ReactDOM.render(<MainView/>, document.getElementById('root'));

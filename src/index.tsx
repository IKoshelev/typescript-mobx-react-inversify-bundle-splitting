import {observable} from 'mobx';
import "reflect-metadata";
import {observer} from 'mobx-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import DevTools from 'mobx-react-devtools';

@observer
class MainView extends React.Component<{}, {SubCmp?:React.ComponentClass}> {

    constructor(props:{}){
        super(props);
        this.state = {};
    }

    loadSplitCode(){
        return import(/* webpackChunkName: "CurrentUser.component" */ './components/CurrentUser.component')
            .then((cmp => {
                this.setState({SubCmp: cmp.CurrentUserComponent});
            }));
    }

    render() {
        return (
            <div>
                Welcome! 
                <button onClick={ () => this.loadSplitCode() }>Show user</button>
                { this.state.SubCmp
                    ? <this.state.SubCmp/>
                    : null}
                {/* <CurrentUserComponent/> */}
                <DevTools />
            </div>
        );
     }
};

ReactDOM.render(<MainView/>, document.getElementById('root'));

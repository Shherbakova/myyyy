import React, {Component} from 'react';
import PersistentDrawerLeft from './components/appBar2'
import SimpleAppBar from './components/secondAppBar'
import FolderList from './components/groups'


class App extends Component {
    render() {
        return (
            <div className="App">
                <PersistentDrawerLeft/>
                <SimpleAppBar/>
                <FolderList/>
            </div>
        );
    }
}

export default (App);

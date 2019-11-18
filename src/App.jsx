import React from 'react';
import {observer} from 'mobx-react';

import Store from './data/Store';
import Node from './components/Node';
import JsonView from "./components/JsonView";
import './styles/global.scss'

@observer
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tree">
                <div className="tree-view">
                    <div className="tree-view__title">Edit tree below:</div>
                    <button className="button button--add" onClick={Store.addNode}>+root node</button>
                    <div className="tree-nodes">
                        {
                            Store.nodes
                                .filter(node => node.parentNodeId === undefined)
                                .map(node => <Node key={node.id} item={node}/>)
                        }
                    </div>
                </div>
                <JsonView/>
            </div>
        );
    }
}

export default App;

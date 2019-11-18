import {
    action,
    observable
} from 'mobx';

import NodeModel from '../models/NodeModel';

class Store {
    @observable nodes = [];

    @action
    addNode = (parentNode) => {
        const node = new NodeModel();
        node.parentNodeId = parentNode.id;
        this.nodes.push(node);
    }

    @action
    removeNode = (node) => {
        this.nodes = this.nodes.filter(item => +item.id !== +node.id);
        let nodeChildren = this.nodes.filter(item => +item.parentNodeId === +node.id);
        if(nodeChildren.length){
            nodeChildren.map((item)=> this.removeNode(item));
        }
    }
}

const store = new Store();
export default store;
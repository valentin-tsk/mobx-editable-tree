import {
    action,
    observable
} from 'mobx';

import NodeAttributeModel from './NodeAttributeModel';

class NodeModel {
    @observable id = null;
    @observable title = '';
    @observable parentNodeId = null;
    @observable attributes = [];

    constructor() {
        this.id = Date.now();
    }

    @action
    addAttribute = () => {
        this.attributes.push(new NodeAttributeModel());
    };

    @action
    removeAttribute = (attr) => {
        this.attributes = this.attributes.filter(item => +item.id !== +attr.id);
    };

}

export default NodeModel;
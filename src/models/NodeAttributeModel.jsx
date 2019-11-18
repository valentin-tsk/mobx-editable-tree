import {
    observable
} from 'mobx';

class NodeAttributeModel {
    @observable id = null;
    @observable name = '';
    @observable value = '';

    constructor(){
        this.id = Date.now();
    }
}

export default NodeAttributeModel;
import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import NodeAttribute from '../NodeAttribute';

import Store from '../../data/Store';
import { computed } from 'mobx';

@observer
class Node extends React.Component {
    static propTypes = {
        item: PropTypes.object
    };

    constructor(props) {
        super(props);
    }

    handleAddChild = () => {
        const {
            item
        } = this.props;

        Store.addNode(item);
    }

    handleRemove = () => {
        const {
            item
        } = this.props;

        Store.removeNode(item);
    }

    handleChange = (e) => {
        const {
            item
        } = this.props;

        item.title = e.target.value;
    }

    @computed
    get childNodes(){
        const {
            item
        } = this.props;
        return Store.nodes.filter(node => +node.parentNodeId === +item.id);
    }

    renderChildren = () => {
        return (
            <div className="tree-node-children">
                {this.childNodes.map(node => <Node key={node.id} item={node}/>)}
            </div>
        )
    }

    renderAttribures = (item) => {
        return (
            <div className="tree-node-attributes">
                {item.attributes.map(attr => <NodeAttribute key={attr.id} item={attr} onDelete={item.removeAttribute}/>)}
            </div>
        )
    }

    render() {
        const {
            item
        } = this.props;
        return (
            <div className="tree-node">
                <div className="tree-node-control">
                    <button className="button button--add" onClick={item.addAttribute}>+attribute</button>
                    <button className="button button--add" onClick={this.handleAddChild}>+child</button>
                    <input className="input input--node" onChange={this.handleChange} value={item.title} autoComplete="new-password" placeholder="node name"/>
                    <button className="button button--remove" onClick={this.handleRemove}>-node</button>
                </div>

                {item.attributes.length>0 && this.renderAttribures(item)}
                {this.childNodes.length>0 && this.renderChildren()}
            </div>
        );
    }
}

export default Node;

import React from 'react';
import {observer} from 'mobx-react';

import Store from '../../data/Store';

@observer
class JsonView extends React.Component {
    constructor(props) {
        super(props);
    }

    getNestedJsonNodes = () => {
        let map = {},
            node, roots = [],
            list = Store.nodes;
        for (let i = 0; i < list.length; i += 1) {
            map[list[i].id] = i;
            list[i].children = [];
        }
        for (let i = 0; i < list.length; i += 1) {
            node = list[i];
            const formattedNode = {
                title: list[i].title,
                attributes: list[i].attributes.map(
                    (attribute) => { return {
                        name: attribute.name,
                        value: attribute.value
                    }
                }),
                children: list[i].children
            };
            if (node.parentNodeId !== undefined) {
                list[map[node.parentNodeId]].children.push(formattedNode);
            } else {
                roots.push(formattedNode);
            }
        }
        return roots;
    }

    render() {
        return (
            <div className="json-view">
                <div className="json-view__title">JSON View</div>
                <textarea className="json-view__textarea"
                          value={JSON.stringify(this.getNestedJsonNodes(), undefined, 2)} readOnly></textarea>
            </div>
        );
    }
}

export default JsonView;

import React from 'react';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

@observer
class NodeAttribute extends React.Component {
    static propTypes = {
        item: PropTypes.object,
        onDelete: PropTypes.func,
    };

    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        const {
            item
        } = this.props;

        item[e.target.name] = e.target.value;
    }

    handleDelete = () => {
        const {
            item,
            onDelete
        } = this.props;

        onDelete(item);
    }

    render() {
        const {
            item,
        } = this.props;

        return (
            <div>
                <input className="input input--attribute" onChange={this.handleChange} name='name'  value={item.name} autoComplete="new-password" placeholder="attribute name"/>
                <input className="input input--attribute" onChange={this.handleChange} name='value' value={item.value} autoComplete="new-password" placeholder="attribute value"/>
                <button className="button button--remove" onClick={this.handleDelete}>-attribute</button>
            </div>
        );
    }
}

export default NodeAttribute;

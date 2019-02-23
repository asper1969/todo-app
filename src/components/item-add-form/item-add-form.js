import './item-add-form.css';

import React, {Component} from 'react';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    };

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const {label} = this.state;
        this.setState({label: ''});
        const cb = this.props.onItemAdded || (() => {});
        cb(label);
    };

    render() {
        return (
            <form className="bottom-panel d-flex"
                  onSubmit={this.onSubmit}>
                <input onChange={this.onLabelChange}
                       value={this.state.label}
                       type="text"
                       placeholder="What needs to be done? "/>
                <button
                    type="submit"
                    className="btn btn-outline-secondary"></button>
            </form>
        )
    }
}
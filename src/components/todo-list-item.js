import React, {Component} from 'react';

export default class TodoListItem extends Component {

    onLabelClick = () => {
        console.log(this.props.label)
    };

    render() {
        const {label, important = false} = this.props;

        const style = {
            color: important ? 'tomato' : 'black'
        };

        return <span
            onClick={this.onLabelClick}
            className="todo-list-item"
            style={style}>{label}</span>
    };
}
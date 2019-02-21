import React from 'react';
import TodoListItem from './todo-list-item';
import './todo-list.css';

const TodoList = ({items}) => {

    const elements = items.map((item, key) => {
        return (
            <li className="list-group-item" key={key}><TodoListItem {...item}/>
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
};

export default TodoList;
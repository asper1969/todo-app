import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {

    const todoData = [
        {label: 'First', important: false},
        {label: 'Second', important: false},
        {label: 'Three', important: true},
        {label: 'Fourth', important: false}
    ];

    return (
        <div>
            <span>{(new Date()).toString()}</span>
            <AppHeader/>
            <SearchPanel/>
            <TodoList items={todoData}/>
        </div>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));
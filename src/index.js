import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';
import ItemAddForm from './components/item-add-form';

export default class App extends Component{

    state = {
        items: [
            {id: 1, label: 'Drink coffee', important: false, done: false},
            {id: 2, label: 'Learn React', important: true, done: false},
            {id: 3, label: 'Make Awesome App', important: false, done: false},
        ],
        filter: 'all'
    };

    maxId = 100;

    filterItems(items, filter){
        if(filter === 'all'){
            return items;
        }else if(filter === 'active'){
            return items.filter((item) => (!item.done));
        }else if(filter === 'done'){
            return items.filter((item) => item.done);
        }
    }

    onFilterChange = (filter) => {
        this.setState({filter});
    };

    createItem = (label) => {

        return{
            id: ++this.maxId,
            label,
            important: false,
            done: false
        }
    };

    onItemAdded = (label) => {

        this.setState((state) => {
            const item = this.createItem(label);
            return {items: [...state.items, item]}
        });
    };

    onDelete = (id) => {
        this.setState((state) => {
            const idx = state.items.findIndex((item) => item.id === id);
            const items = [
                ...state.items.slice(0,idx),
                ...state.items.slice(idx + 1)
            ];
            return {items};
        });
    };

    toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex((item) => item.id === id);
        const oldItem = arr[idx];
        const value = !oldItem[propName];

        const item = {...arr[idx], [propName]:value};
        return [
            ...arr.slice(0, idx),
            item,
            ...arr.slice(idx + 1)
        ];
    };

    onToggleImportant = (id) => {

        this.setState((state) => {
            const items = this.toggleProperty(state.items, id, 'important');

            return {items};
        });
    };

    onToggleDone = (id) => {

        this.setState((state) => {
            const items = this.toggleProperty(state.items, id, 'done');

            return {items}
        });
    };

    render(){
        const {items, filter} = this.state;
        const visibleItems = this.filterItems(items, filter);

        return (
            <div className="todo-aoo">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter
                        filter={filter}
                        onFilterChange={this.onFilterChange}
                    />
                </div>
                <TodoList
                    items={visibleItems}
                    onToggleImportant = {this.onToggleImportant}
                    onToggleDone = {this.onToggleDone}
                    onDelete = {this.onDelete}
                />
                <ItemAddForm onItemAdded = {this.onItemAdded}/>
            </div>
        );
    };
};


ReactDOM.render(<App />, document.getElementById('root'));
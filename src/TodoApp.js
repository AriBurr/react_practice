import React from 'react';
import List from './List';
import TodoForm from './TodoForm';
import Footer from './Footer';

export class TodoApp extends React.Component{
  state = { items: [], filter: 'All' };

  addTodo = (todo) => {
    this.setState({ items: [...this.state.items, todo] });
  }

  setFilter = (filter) => {
    this.setState({ filter });
  }

  filteredItems = () => {
    const { filter, items } = this.state;
    switch(filter) {
      case 'All':
        return items;
      case 'Active':
        return items.filter( t => !t.complete );
      case 'Completed':
        return items.filter( t => t.complete);
      default:
        return items;
    }
  }

  toggleTodo = (id) => {
    let items = this.state.items.map( item => {
      if (item.id === id) {
        return {
          ...item,
          complete: !item.complete
        }
      }
      return item;
    });

    this.setState({ items });
  }

  render(){
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        <List toggleTodo={this.toggleTodo} items={this.filteredItems()} />
        <Footer setFilter={this.setFilter} activeFilter={this.state.filter} />
      </div>
    )
  }
}

export default TodoApp;

import React, { Component } from 'react';
import TodoApp from './TodoApp';

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoApp />
      </div>
    );
  }
}

export default App;

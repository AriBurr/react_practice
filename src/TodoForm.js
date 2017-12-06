import React from 'react';

export class TodoForm extends React.Component{
  state = { name: '', nextId: 1 };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, nextId } = this.state;
    const todo = {name, id: nextId};
    this.setState({name: '', nextId: nextId + 1 });
    this.props.addTodo(todo);
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  render(){
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input value = {name} onChange={this.handleChange} />
      </form>
    )
  }
}

export default TodoForm;

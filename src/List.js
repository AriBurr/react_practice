import React from 'react';
import Todo from './Todo';

class List extends React.Component {

  render () {
    let items = this.props.items.map(item => {
      return (<Todo key={item.id} {...item} toggleTodo={this.props.toggleTodo} />)
    });

    return (
      <ul>
        {items}
      </ul>
    );

  }
}

export default List;

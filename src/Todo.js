import React from 'react';

const styles = {
  pointer: { cursor: 'pointer' },
  complete: { textDecoration: 'line-through', color: 'grey' }
}

const Todo = ({ name, id, complete, toggleTodo }) => (
  <li
    onClick={() => toggleTodo(id)}
    style={complete ? {...styles.pointer, ...styles.complete} : styles.pointer}
  >
    {name}
  </li>
)

export default Todo;

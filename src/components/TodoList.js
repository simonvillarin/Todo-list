import React from 'react';

function TodoList({ todo }) {
  return <div className="todo-item">{todo.text}</div>;
}

export default TodoList;

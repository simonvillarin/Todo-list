import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
    if (todos.length > 1) {
      id = todos[0].id + 1;
    }

    let todo = { id: id, text: text, completed: false };
    setTodos([todo, ...todos]);
  };

  return (
    <div className="container">
      <Form addTodo={addTodo} />
      {todos.map((todo) => {
        return <TodoList key={todo.id} todo={todo} />;
      })}
    </div>
  );
}

export default App;

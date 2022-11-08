import React, { useState } from 'react';

function Form({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a Todo"
        className="form-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="form-button">
        Submit
      </button>
    </form>
  );
}

export default Form;

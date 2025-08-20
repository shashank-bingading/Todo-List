import React, { useState } from 'react';
import { useTodo } from '../context';

function TodoForm() {
  const [todo, setTodo] = useState('');
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo.trim()) return;
    addTodo({ todo, completed: false });
    setTodo('');
  };

  return (
    <form onSubmit={add} className="flex shadow-lg rounded-xl overflow-hidden">
      <input
        type="text"
        placeholder="✍️ Write a Todo..."
        className="w-full px-4 py-2 bg-white/40 backdrop-blur-md text-black placeholder:text-gray-600 outline-none border border-white/30"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-gradient-to-r from-blue-400 to-green-400 text-white font-semibold hover:opacity-90 transition duration-200"
      >
        ➕ Add
      </button>
    </form>
  );
}

export default TodoForm;

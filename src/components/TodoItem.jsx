import React, { useState } from 'react';
import { useTodo } from '../context';

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { updateTodo, deleteTodo, toggleComplete } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-xl shadow-lg border backdrop-blur-md transition duration-300 ${
        todo.completed
          ? 'bg-gradient-to-r from-green-200 to-blue-200 border-white/30'
          : 'bg-white/50 border-white/20'
      }`}
    >
      {/* Checkbox */}
      <input
        type="checkbox"
        className="cursor-pointer w-5 h-5 accent-blue-500"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      {/* Todo Text Field */}
      <input
        type="text"
        className={`w-full bg-transparent outline-none rounded-lg px-2 py-1 transition text-black placeholder:text-gray-500 ${
          isTodoEditable ? 'border border-white/30' : 'border-none'
        } ${todo.completed ? 'line-through text-gray-500' : ''}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Edit / Save Button */}
      <button
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
        className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-100 hover:bg-blue-200 border border-white/30 disabled:opacity-50"
        title={isTodoEditable ? 'Save' : 'Edit'}
      >
        {isTodoEditable ? '💾' : '✏️'}
      </button>

      {/* Delete Button */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-100 hover:bg-red-200 border border-white/30"
        title="Delete"
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;

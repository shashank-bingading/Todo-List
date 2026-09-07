import React from 'react'
import {useState} from 'react'
import { useTodoContext } from '../context/TodoContext';
const TodoItem = ({todo}) => {
    const [isEditableTodo,setIsEditableTodo] = useState(false);
    const [msg,setMsg] = useState(todo.text);
    
    const {updateTodo,deleteTodo,toggleComplete} = useTodoContext();

    const editTodo = ()=>{
        updateTodo(todo.id,{...todo,text:msg});
        setIsEditableTodo((prev)=>(!prev));
    }
    const todoToggleComplete = ()=>{
        toggleComplete(todo.id);
    }
    const deleteThatTodo = ()=>{
      deleteTodo(todo.id);
    }

  return (
    <div>
      <input type="checkbox"
        checked={todo.completed}
        onChange={todoToggleComplete}
         />
      <div>
        <input type="text"
        className={`${isEditableTodo?'border':'else mt do'}`}
          value={msg}
          onChange={(e)=>{setMsg(e.target.value)}} />

      </div>
      <div>
        <button
        className='border border-black'
        onClick={()=>{
          if(todo.completed)return;
          if(isEditableTodo){
            editTodo();
          }
          else{
            setIsEditableTodo((prev)=>{return (!prev)})
          }
        }}>
          {isEditableTodo?'Save':'Edit'}
        </button>
        <button
        onClick={()=>{
          deleteThatTodo(todo.id)
        }}></button>
      </div>
    </div>
  )
}

export default TodoItem

import { useTodoContext } from '../context/TodoContext';
import { useState } from 'react';
const TodoForm = () => {

  const [todo,setTodo] = useState("");
  const {addTodo} = useTodoContext();

  const handleSubmit = (event)=>{
    event.preventDefault();
    const data = todo.trim();
    if(data){
      addTodo({
        text:data,
        completed:false
      }); 
    }
    else{
      alert("Make a todo bro");
    }
    setTodo("");
      return;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='Todo'>
          Todo:
        </label>
        <input
        type='text'
        placeholder='What do you plan on doing today?'
        value={todo.text}
        onChange={((event)=>setTodo(event.target.value))}/>
        <button
        type='submit'>Add</button>
      </form>
    </div>
  )
}

export default TodoForm


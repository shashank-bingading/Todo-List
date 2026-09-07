import { useEffect,useState } from "react";
import { TodoForm,TodoItem } from "./components/index.js";
import { TodoProvider } from "./context/TodoContext.js";

function App() {
  const [todos,setTodos] = useState(()=>{
    const storedTodos = JSON.parse(window.localStorage.getItem("todos"))
    return storedTodos && storedTodos.length > 0?storedTodos:[];
  });
  //defining functions here
  const addTodo = (todo)=>{
    setTodos((prev)=>
      [{id:Date.now(),...todo},...prev]
    )
  };
  const updateTodo = (id,todo)=>{
    setTodos((prev)=>
      prev.map((prevTodo)=>(prevTodo.id===id?todo:prevTodo))
    )
  }
  //basically iterating through each todo and changing only the one that has been changed
  const deleteTodo = (id)=>{
    setTodos((prev)=>
      prev.filter((prevTodo)=>
        prevTodo.id!==id
      )
    )
  }

  const toggleComplete = (id)=>{
    setTodos((prev)=>
      prev.map((todo)=>(todo.id===id?{...todo,completed:!todo.completed}:todo))
    )
  }

  //setting values into localStorage
  //a little different 
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);


  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <TodoForm/>
    <div>
      {todos.map((todo)=>(
        <div key={todo.id}>
        <TodoItem todo = {todo}/>
        </div>
      ))}
    </div>
    </TodoProvider>
  );
}

export default App;

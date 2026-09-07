import {createContext,useContext} from 'react'

const TodoContext = createContext({
    todos:[{
        id:1,
        text:"Context not Provided",
        completed:false
    }],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},
});

export const useTodoContext= ()=>{
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;

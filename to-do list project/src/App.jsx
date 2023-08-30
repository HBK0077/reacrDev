import { useEffect, useState } from "react"
import { NewTodoForm } from "./newTodoForm"
import "./style.css"
import { TodoList } from "./TodoList"
export default function App(){
  
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS");
    if(localValue === null) return []
    
    return JSON.parse(localValue)
  })
  {/* here 1st element in the array is an variable where the 2nd item should be a function so it will have 
setFunctionName(setNewItem)*/}

  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  },[todos])
function addTodo(title){
  setTodos(currentTodo =>{
    return [
      ...currentTodo,
      {
        id: crypto.randomUUID(), title, completed: false
      }
    ]
  })
}

function toggleTodo(id, completed){
  setTodos(currentTodo =>{
    return currentTodo.map(todo =>{
      if(todo.id ===  id){
        return {...todo, completed} // always remember that in useState the value changes are not possible so we have to create a whole new todo and change the value.
      }

      return todo
    })
  })
}

function deleteTodo(id){
  setTodos(currentTodo=>{
    return currentTodo.filter(todo => todo.id !== id)
  })
}


  return (
    <> {/* this tag is used so that we can return multiple components*/}
    <NewTodoForm onSubmit={addTodo}/>
    <h1 className="header">ToDo List</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
  )

}
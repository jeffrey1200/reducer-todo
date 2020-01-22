import React, { useReducer } from "react";

import "./App.css";
import { toDoContext } from "./Contexts/toDoContext";
import { todoReducer, initialState } from "./Reducers/ToDoReducer";
import TodoList from "./Components/TodoList";
import TodoForm from "./Components/TodoForm";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <toDoContext.Provider value ={{state,dispatch}}>
      <div style={{textAlign:'center'}}>

        <h1>Welcome to my toDoList</h1>
      <TodoForm dispatch = {dispatch}/>
      <TodoList data = {state}/>
      </div>
      

    </toDoContext.Provider>
  );
}

export default App;

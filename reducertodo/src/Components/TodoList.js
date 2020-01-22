import React, { useContext } from 'react';
import { toDoContext } from '../Contexts/toDoContext';

function TodoList() {

    const {state,dispatch} = useContext(toDoContext)
    const handleToggle = id=>{
        dispatch({ type: "COMPLETED", id: id })
    }
    return (
        <div className="App">
        {state.map(items => (
          <div className={`todo${items.completed ? " completed" : ""}`} key={items.id} onClick = {() => handleToggle(items.id)}>
            <p>{items.item}</p>
          </div>
        ))}
      </div>
    )
}

export default TodoList;

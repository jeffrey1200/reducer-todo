import React, { useState, useContext } from "react";
import { toDoContext } from "../Contexts/toDoContext";

function TodoForm() {
  const [text, setText] = useState("");

  const { dispatch } = useContext(toDoContext);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type:'ADD_TODO',payload: text });
    setText('')
  };
  const handleChanges = e => {
    const { name, value } = e.target;
    setText( value );

  };
  const handleClear = e => {
    e.preventDefault();
    dispatch({ type: "REMOVE", payload: text })
}
  console.log(text)
  return (
    <div>
      <form>
        <input type="text" name="item" value={text} onChange={handleChanges} />
        <button onClick ={handleSubmit}>Add</button>
        <button onClick ={handleClear}>Delete</button>

      </form>
    </div>
  );
}

export default TodoForm;

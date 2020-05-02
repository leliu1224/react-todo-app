import React, { useState, useContext } from "react";
import { TodoInputContext } from "./context";
import "./App.css";

function TodoInput() {
  const [value, setValue] = useState("");
  const { addTodo } = useContext(TodoInputContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default TodoInput;

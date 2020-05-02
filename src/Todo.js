import React, { useContext } from "react";
import { TodoContext } from "./context";
import "./App.css";

function Todo() {
  const { todo, index, completeTodo, removeTodo } = useContext(TodoContext);

  return (
    <div>
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      {todo.text}
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => removeTodo(index)}>X</button>
    </div>
  );
}

export default Todo;

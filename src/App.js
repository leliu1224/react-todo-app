import React, { useState, useEffect } from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";
import { TodoContext, TodoInputContext } from "./context";
import "./App.css";

function App() {
  const initialTodos = window.localStorage.getItem("todos")
    ? JSON.parse(window.localStorage.getItem("todos"))
    : [];

  const [todos, setTodos] = useState([initialTodos]);

  function addTodo(value) {
    // [{text:"", isComplete:false}]
    const newTodos = [...todos, { text: value, isComplete: false }];
    setTodos(newTodos);
  }

  function removeTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function completeTodo(index) {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      {todos.map((todo, index) => (
        <TodoContext.Provider value={{ todo, index, completeTodo, removeTodo }}>
          <Todo />
        </TodoContext.Provider>
      ))}
      <TodoContext.Provider value={{ addTodo }}>
        <TodoInput />
      </TodoContext.Provider>
    </div>
  );
}

export default App;

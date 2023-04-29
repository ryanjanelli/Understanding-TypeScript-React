import React, { useState } from "react";
import { Route } from "react-router-dom";
// if type support starts to fail with router do
// npm install --save-dev @types/react-router-dom
// in installed this to see

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    let newItem = { id: Math.random().toString(), text: text };
    console.log("app todoAddHandler");
    setTodos((prevTodos) => [...prevTodos, newItem]);
  };

  const todoDeleteHandler = (todoId: string) => {
    console.log(todos);
    let newTodos = todos.filter((todo) => todo.id !== todoId);
    console.log(newTodos);
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler.bind(this)} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;

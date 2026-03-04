import React from "react";
import { useTodos } from "./todostate.jsx";
import NewTodoForm from "./todo.jsx";
import TodoItem from "./todoitem.jsx";
import Stars from "./stars.jsx";

export default function App() {
  const [todos, update] = useTodos();

  return (
    <div>
      <Stars />
      <h1>Todo List</h1>

      <NewTodoForm update={update} />

      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} update={update} />
      ))}
    </div>
  );
}

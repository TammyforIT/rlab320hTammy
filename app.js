import React from "react";
import { useTodos } from "./todosState.js";
import NewTodoForm from "./todo.js";
import TodoItem from "./todoitem.js";
import Stars from "./stars.js";

export default function App() {
  const [todos, update] = useTodos();

  return (
    <div style={{ padding: 20, position: "relative" }}>
      <Stars />

      <h1>Todo List</h1>

      <NewTodoForm update={update} />

      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} update={update} />
      ))}
    </div>
  );
}

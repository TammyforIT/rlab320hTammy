import React from "https://esm.sh/react";
import { useTodos } from "./reducer.js";
import NewTodoForm from "./todo.js";      // ← FIXED
import TodoItem from "./todoitem.js";
import Stars from "./stars.js";

export default function App() {
  const [todos, dispatch] = useTodos();

  return (
    <div style={{ padding: 20, position: "relative" }}>
      <Stars />

      <h1>Todo List</h1>

      <NewTodoForm dispatch={dispatch} />   {/* ← FIXED */}

      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}

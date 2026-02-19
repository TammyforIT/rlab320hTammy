import React from "https://esm.sh/react";
import { useTodos } from "./reducer.js";
import NewTodoForm from "./NewTodoForm.js";
import TodoItem from "./TodoItem.js";

export default function App() {
  const [todos, dispatch] = useTodos();

  return (
    <div style={{ padding: 20 }}>
      <h1>Todo List</h1>

      <NewTodoForm dispatch={dispatch} />

      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}

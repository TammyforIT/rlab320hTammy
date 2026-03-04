import React, { useState } from "react";

export default function TodoItem({ todo, update }) {
  const [editText, setEditText] = useState(todo.title);

  if (todo.editing) {
    return (
      <div>
        <input
          value={editText}
          onChange={e => setEditText(e.target.value)}
        />
        <button
          onClick={() =>
            update({ saveEdit: { id: todo.id, title: editText } })
          }
        >
          Save
        </button>
      </div>
    );
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => update({ toggle: todo.id })}
      />

      <span style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        {todo.title}
      </span>

      <button
        onClick={() => update({ startEdit: todo.id })}
        disabled={todo.completed === true}
      >
        Edit
      </button>

      <button
        onClick={() => update({ remove: todo.id })}
        disabled={!todo.completed}
      >
        Delete
      </button>
    </div>
  );
}

import React, { useState } from "https://esm.sh/react";

export default function TodoItem({ todo, dispatch }) {
  const [editText, setEditText] = useState(todo.title);

  return (
    <div style={{ marginTop: 10 }}>
      {!todo.editing && (
        <>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch({ type: "toggle", id: todo.id })}
          />

          <span style={{ marginLeft: 8 }}>{todo.title}</span>

          <button
            onClick={() => dispatch({ type: "start-edit", id: todo.id })}
            style={{ marginLeft: 10 }}
          >
            Edit
          </button>

          <button
            disabled={!todo.completed}
            onClick={() => dispatch({ type: "delete", id: todo.id })}
            style={{ marginLeft: 10 }}
          >
            Delete
          </button>
        </>
      )}

      {todo.editing && (
        <>
          <input
            value={editText}
            onChange={e => setEditText(e.target.value)}
          />
          <button
            onClick={() =>
              dispatch({ type: "save-edit", id: todo.id, title: editText })
            }
          >
            Save
          </button>
        </>
      )}
    </div>
  );
}

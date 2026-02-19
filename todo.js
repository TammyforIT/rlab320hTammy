import React, { useState } from "https://esm.sh/react";

export default function NewTodoForm({ dispatch }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: "add", title: text });
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="New todo"
      />
      <button>Add</button>
    </form>
  );
}

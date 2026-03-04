import React, { useState } from "react";

export default function NewTodoForm({ update }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (text.trim() === "") return;

    update({ add: text });
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a todo"
      />
      <button>Add</button>
    </form>
  );
}

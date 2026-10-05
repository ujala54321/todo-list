import React from "react";

export default function Todo({ todo, onDelete }) {
  return (
    <div style={{ borderBottom: "1px solid #ccc", padding: "10px 0" }}>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button onClick={() => onDelete(todo)}>Delete</button>
    </div>
  );
}
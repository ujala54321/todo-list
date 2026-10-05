import React from "react";
import Todo from "./Todo";

export default function Todos({ todos, onDelete }) {
  return (
    <div className="container my-3">
      <h3>Todos List</h3>
      {todos.length === 0
        ? "No Todos to display"
        : todos.map((todo) => (
            <Todo todo={todo} key={todo.sno} onDelete={onDelete} />
          ))}
    </div>
  );
}
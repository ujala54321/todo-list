import React, { useState } from "react";
import Header from "./MyComponent/Header";
import Footer from "./MyComponent/Footer";
import Todos from "./MyComponent/Todos";
import AddTodo from "./MyComponent/AddTodo";

function App() {
  const [todos, setTodos] = useState([
    { sno: 1, title: "Go to the market", desc: "Buy vegetables" },
    { sno: 2, title: "Go to the mall", desc: "Buy clothes" },
  ]);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    const sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    const myTodo = { sno, title, desc };
    setTodos([...todos, myTodo]);
  };

  return (
    <>
      <Header title="My Todos List" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
import React from "react";

export default function Header(props) {
  return (
    <nav style={{ background: "#222", color: "#fff", padding: "15px" }}>
      <h2>{props.title}</h2>
    </nav>
  );
}

Header.defaultProps = {
  title: "Todo App",
};
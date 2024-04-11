import React from "react";
import { useSelector } from "react-redux";

export default function Todos() {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <h1>Todos</h1>
      <div>{JSON.stringify(todos)}</div>
      <ul>
        {/* {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>
          </li>
        ))} */}
      </ul>
    </div>
  );
}

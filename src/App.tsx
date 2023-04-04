import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
export interface IList {
  id: number;
  title: string;
}

function App() {
  return (
    <div>
      <div>todolist</div>

      <TodoList />
    </div>
  );
}

export default App;

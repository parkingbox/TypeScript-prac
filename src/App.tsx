import React from "react";
import TodoList from "./components/TodoList";
export type IList = {
  id: number;
  title: string;
};

function App() {
  return <TodoList />;
}

export default App;

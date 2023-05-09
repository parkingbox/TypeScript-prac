import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/config/configstore";
import { ITodo } from "../redux/modules/todoSlice";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <div>
      <AddTodo />
      {todos.map((todo: ITodo) => (
        <TodoItem key={todo.id} id={todo.id} title={todo.title} />
      ))}
    </div>
  );
}

export default TodoList;

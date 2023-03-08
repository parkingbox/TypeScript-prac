import React, { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

export type IList = {
  id: number;
  title: string;
};

function TodoList() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState<IList[]>([
    {
      id: 1,
      title: "타입",
    },
    {
      id: 2,
      title: "공부",
    },
  ]);

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const newTodo: IList = {
      id: todos.length + 1,
      title,
    };
    if (title === "") {
      alert("입력");
      return;
    }
    setTodos([...todos, newTodo]);
    setTitle("");
  }
  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }
  function onDeleteHandler(id: number) {
    setTodos(todos.filter((item) => item.id !== id));
  }
  return (
    <div>
      <AddTodo
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
        title={title}
      />
      <div>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            id={item.id}
            title={item.title}
            onDeleteHandler={onDeleteHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default TodoList;

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../redux/config/configstore";
import { addTodo, ITodo } from "../redux/modules/todoSlice";

function AddTodo() {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos);
  const [title, setTitle] = useState<string>("");

  function onSubmitHandler(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const newTodo: ITodo = {
      id: todos.length + 1,
      title,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
  }
  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value);
  }
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={title}
          name="title"
          onChange={onChangeHandler}
          required
        />
        <button>추가</button>
      </form>
    </div>
  );
}

export default AddTodo;

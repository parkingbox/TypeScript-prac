import React, { useState } from "react";
interface IAddTodo {
  onChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void;
  onSubmitHandler(event: React.FormEvent<HTMLFormElement>): void;
  title: string;
}

function AddTodo({ onChangeHandler, onSubmitHandler, title }: IAddTodo) {
  return (
    <div>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <input
          type="text"
          value={title}
          name="title"
          onChange={(e) => onChangeHandler(e)}
        />
        <button>추가</button>
      </form>
    </div>
  );
}

export default AddTodo;

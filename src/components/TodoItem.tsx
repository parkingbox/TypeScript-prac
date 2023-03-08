import React from "react";

interface ITodo {
  id: number;
  title: string;
  onDeleteHandler(id: number): void;
}

function TodoItem({ id, title, onDeleteHandler }: ITodo) {
  return (
    <div>
      <div>
        <p>{title}</p>
        <button onClick={() => onDeleteHandler(id)}>삭제</button>
      </div>
    </div>
  );
}

export default TodoItem;

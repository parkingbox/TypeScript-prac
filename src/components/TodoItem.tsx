import React from "react";

interface ITodo {
  title: string;
}

function TodoItem({ title }: ITodo) {
  return (
    <div>
      <div>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default TodoItem;

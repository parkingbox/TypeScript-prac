import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo, ITodo } from "../redux/modules/todoSlice";

function TodoItem({ id, title }: ITodo) {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  function deleteHandler(id: number) {
    dispatch(deleteTodo(id));
  }

  return (
    <>
      <div>
        <p>{title}</p>
        <button
          onClick={() => {
            deleteHandler(id);
          }}
        >
          삭제
        </button>
        
      </div>
    </>
  );
}

export default TodoItem;

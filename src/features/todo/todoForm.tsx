import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addTodo } from "./todoSlice";

export const TodoForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const onTitleChanged = (title: string) => setTitle(title);
  const onSaveTodoClicked = () => {
    if (title != "") {
      dispatch(
        addTodo({
          id: nanoid(),
          title: title,
          done: false,
        })
      );
    }
    setTitle("");
  };

  return (
    <section>
      <form>
        <label htmlFor="todoTitle">Title:</label>
        <input
          type="text"
          id="todoTitle"
          name="todoTitle"
          value={title}
          onChange={(e) => onTitleChanged(e.target.value)}
        />
        <button type="button" onClick={() => onSaveTodoClicked()}>
          Add todo
        </button>
      </form>
    </section>
  );
};

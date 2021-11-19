import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { TodoForm } from "./todoForm";
import { doneTodo } from "./todoSlice";
import styles from "./todo.module.css";

export const TodoList: React.FC = () => {
  const todoList = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();
  const [showDone, setShowDone] = useState(false);

  const onToggleShowDone = () => {
    if (showDone == true) {
      setShowDone(false);
    } else {
      setShowDone(true);
    }
  };

  const toggleShowDone = () => (
    <>
      <input
        type="checkbox"
        id="toggleShowDone"
        onChange={() => onToggleShowDone()}
      />
      <label htmlFor="toggleShowDone">Toggle showing done todo</label>
    </>
  );

  const renderedNotYetTodo = todoList
    .filter((todo) => todo.done == false)
    .map((todo) => (
      <section key={todo.id}>
        <div className={styles.row}>
          <p>{todo.title}</p>
          {todo.done ? "done" : "not yet"}
          <button type="button" onClick={() => dispatch(doneTodo(todo))}>
            Done
          </button>
        </div>
        <hr />
      </section>
    ));

  const renderedAllTodo = todoList.map((todo) => (
    <section key={todo.id}>
      <div className={styles.row}>
        <p>{todo.title}</p>
        {todo.done ? "done" : "not yet"}
        <button type="button" onClick={() => dispatch(doneTodo(todo))}>
          Done
        </button>
      </div>
      <hr />
    </section>
  ));

  return (
    <div>
      <h1>Todo</h1>
      {toggleShowDone()}
      <TodoForm />
      {showDone ? renderedAllTodo : renderedNotYetTodo}
    </div>
  );
};

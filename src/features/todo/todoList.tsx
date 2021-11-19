import React from "react";
import { useAppSelector } from "../../app/hooks";
import { TodoForm } from "./todoForm";

export const TodoList: React.FC = () => {
  const todoList = useAppSelector((state) => state.todo);

  const renderedTodo = todoList.map((todo) => (
    <article key={todo.id}>
      <h3>{todo.title}</h3>
      <p>done? {todo.done ? "yes" : "no"}</p>
    </article>
  ));

  return (
    <div>
      <h1>Todo</h1>
      <TodoForm />
      {renderedTodo}
    </div>
  );
};

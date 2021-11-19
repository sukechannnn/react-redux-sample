import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  title: string;
  done: boolean;
};

type TodoList = Todo[];

const initialState: TodoList = [
  { id: "1", title: "Try redux", done: false },
  { id: "2", title: "Read DDD", done: true },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      return state.concat([action.payload]);
    },
    doneTodo: (state, action: PayloadAction<Todo>) => {
      const newState = state.map((todo) => {
        if (todo.id == action.payload.id) {
          return {
            id: todo.id,
            title: todo.title,
            done: true,
          };
        }
        return todo;
      });
      return newState;
    },
  },
});

export const { addTodo, doneTodo } = todoSlice.actions;

export default todoSlice.reducer;

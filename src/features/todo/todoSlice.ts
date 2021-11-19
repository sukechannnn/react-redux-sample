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
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;

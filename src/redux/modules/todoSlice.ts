import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ITodo = {
  id: number;
  title?: string;
};

export const initialState: ITodo[] = [
  {
    id: 0,
    title: "하이",
  },
  {
    id: 1,
    title: "하이하이",
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      const newTodo = [...state, action.payload];
      return newTodo;
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      const newTodo = state.filter((item) => item.id !== action.payload);
      return newTodo;
    },
  },
});
export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;

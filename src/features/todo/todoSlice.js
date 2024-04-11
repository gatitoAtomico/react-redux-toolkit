import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

//Slice will produce an action that we will use for dispatch and a reducer that we will use in configureStore.

export const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuid(),
        text: action.payload,
      };

      console.log("action", action);

      //mutate the state
      //   state.push(todo);
      //or return a new data
      return [...state, todo];
    },

    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;

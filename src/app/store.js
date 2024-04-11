import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

//preloaded state enchancers, devtools and middleware are optional
export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});

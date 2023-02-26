import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../SliceReducers/todoReducer";
export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});

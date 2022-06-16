import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../reducer";

export const store = configureStore({
  reducer: postReducer,
});

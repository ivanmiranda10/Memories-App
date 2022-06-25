import { createReducer } from "@reduxjs/toolkit";
import {
  GET_ALL_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
} from "../actions";

const initialState = {
  posts: [],
};

const postReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(GET_ALL_POSTS, (state, action) => {
      state.posts = action.payload;
    })
    .addCase(CREATE_POST, (state, action) => {
      state.posts = [...state.posts, action.payload];
    })
    .addCase(UPDATE_POST, (state, action) => {
      state.posts.map((el) =>
        el._id === action.payload._id ? action.payload : state.posts
      );
    })
    .addCase(DELETE_POST, (state, action) => {
      state.posts.filter((post) => post._id !== action.payload);
    })
    .addCase(LIKE_POST, (state, action) => {
      state.posts.map((el) =>
        el._id === action.payload._id ? action.payload : state.posts
      );
    })
    .addDefaultCase((state) => {
      return state;
    });
});

export default postReducer;

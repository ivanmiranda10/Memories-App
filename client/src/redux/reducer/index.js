import { createReducer } from "@reduxjs/toolkit";
import { GET_ALL_POSTS } from "../actions";

const initialState = {
  posts: [],
};

const postReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(GET_ALL_POSTS, (state, action) => {
      return {
        ...state,
        posts: action.payload,
      };
    })
    .addDefaultCase((state) => {
      return state;
    });
});

export default postReducer;

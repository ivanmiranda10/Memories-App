import axios from "axios";
import { createAction } from "@reduxjs/toolkit";

export const GET_ALL_POSTS = "GET_ALL_POSTS";

const server = "http://localhost:5000";

export const getAllPosts = createAction(GET_ALL_POSTS, async () => {
  try {
    const posts = await axios.get(`${server}/posts`);
    return {
      payload: posts.data,
    };
  } catch (error) {
    alert("Error Get Posts");
    console.log(error);
  }
});

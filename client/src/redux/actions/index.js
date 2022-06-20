import axios from "axios";

export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const CREATE_POST = "CREATE_POST";

const server = "http://localhost:5000";

export const getAllPosts = () => {
  return async function (dispatch) {
    try {
      const posts = await axios.get(`${server}/posts`);
      console.log("Action Get Posts: ", posts.data);
      return dispatch({ type: GET_ALL_POSTS, payload: posts.data });
    } catch (err) {
      alert("Error Get Posts");
      console.log(err);
    }
  };
};

export function createPost(payload) {
  return async function (dispatch) {
    try {
      const postCreated = await axios.post(`${server}/post/add`, payload);
      console.log("Action Add Post: ", postCreated.data);
      return dispatch({ type: CREATE_POST, payload: postCreated.data });
    } catch (err) {
      alert("Error create Post");
      console.log(err);
    }
  };
}

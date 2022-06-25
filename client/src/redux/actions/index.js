import axios from "axios";

export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const CREATE_POST = "CREATE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";
export const LIKE_POST = "LIKE_POST";

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

export function updatePost(id, post) {
  return async function (dispatch) {
    try {
      const postUpdated = await axios.put(`${server}/post/update/${id}`, post);
      return dispatch({ type: UPDATE_POST, payload: postUpdated.data });
    } catch (error) {
      alert("Error Update Post");
      console.log(error);
    }
  };
}

export function deletePost(id) {
  return async function (dispatch) {
    try {
      await axios.delete(`${server}/post/delete/${id}`);
      return dispatch({ type: DELETE_POST, payload: id });
    } catch (error) {
      alert("Error Delete Post");
      console.log(error);
    }
  };
}

export function likePost(id) {
  return async function (dispatch) {
    try {
      const postLiked = await axios.patch(`${server}/post/like/${id}`);
      return dispatch({ type: LIKE_POST, payload: postLiked.data });
    } catch (error) {
      alert("Error Like Post");
      console.log(error);
    }
  };
}

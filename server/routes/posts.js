const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} = require("../controllers/posts");

router.get("/posts", getPosts);
router.post("/post/add", createPost);
router.put("/post/update/:id", updatePost);
router.delete("/post/delete/:id", deletePost);
router.patch("/post/like/:id", likePost);

module.exports = router;

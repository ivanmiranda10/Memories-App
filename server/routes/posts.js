const express = require("express");
const router = express.Router();
const {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/posts");

router.get("/posts", getPosts);
router.post("/post/add", createPost);
router.put("/post/update/:id", updatePost);
router.delete("/post/delete/:id", deletePost);

module.exports = router;

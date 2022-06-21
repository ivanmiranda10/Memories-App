const express = require("express");
const router = express.Router();
const { getPosts, createPost, updatePost } = require("../controllers/posts");

router.get("/posts", getPosts);
router.post("/post/add", createPost);
router.put("/post/update/:id", updatePost);

module.exports = router;

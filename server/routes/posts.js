const express = require("express");
const router = express.Router();
const { getPosts, createPost } = require("../controllers/posts");

router.get("/posts", getPosts);
router.post("/post/add", createPost);

module.exports = router;

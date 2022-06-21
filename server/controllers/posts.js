const mongoose = require("mongoose");
const PostMessage = require("../models/postMessage");

const getPosts = async (req, res) => {
  try {
    const findPosts = await PostMessage.find();
    res.status(200).json(findPosts);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const createPost = (req, res) => {
  const { creator, title, message, tags, selectedFile } = req.body;
  const newPost = new PostMessage({
    creator,
    title,
    message,
    tags,
    selectedFile,
  });
  try {
    newPost
      .save()
      .then((postCreated) => {
        res.status(201).json(postCreated);
      })
      .catch((err) => console.log(err));
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("No post with that id");
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(
    _id,
    { ...post, _id },
    { new: true }
  );
  res.status(201).json(updatedPost);
};

module.exports = { getPosts, createPost, updatePost };

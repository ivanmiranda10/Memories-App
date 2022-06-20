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

module.exports = { getPosts, createPost };

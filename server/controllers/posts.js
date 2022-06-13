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
  const body = req.body;
  const newPost = new PostMessage(...body);
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

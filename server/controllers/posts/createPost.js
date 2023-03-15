import Post from "../../models/Post.js";
import User from "../../models/User.js";

export const createPost = async (req, res) => {
  const { _id: owner } = req.user;

  const newPost = new Post({
    owner,
    likes: {},
    comments: [],
    ...req.body,
  });
  await newPost.save();

  // const allPosts = await Post.find();
  res.status(201).json(newPost);
};

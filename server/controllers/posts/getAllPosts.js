import errors from "http-errors";
import Post from "../../models/Post.js";

const { NotFound } = errors;

export const getAllPosts = async (req, res) => {
  const post = await Post.find().populate('owner');

  if (!post) {
    throw new NotFound("Not found posts");
  }
  res.json(post);
};

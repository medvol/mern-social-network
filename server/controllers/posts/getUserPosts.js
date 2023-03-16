import errors from "http-errors";
import Post from "../../models/Post.js";

const { NotFound } = errors;

export const getUserPosts = async (req, res) => {
  const { userId } = req.params;
  const posts = await Post.find({ owner:userId });
  if (!posts) {
    throw new NotFound("Not found posts");
  }
  res.status(200).json(posts);
};

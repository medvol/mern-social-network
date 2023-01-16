import errors from "http-errors";
import Post from "../../models/Post.js";

const { NotFound } = errors;

export const getUserPosts = async (req, res) => {
  const { userId } = req.params;
  const post = await Post.find({ userId });
  if (!post) {
    throw new NotFound("Not found posts");
  }
  res.status(200).json(post);
};

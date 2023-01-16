import errors from "http-errors";
import Post from "../../models/Post.js";

const { NotFound } = errors;

export const getFeedPosts = async (req, res) => {
  const post = await Post.find();

  if (!post) {
    throw new NotFound("Not found posts");
  }
  res.json(post);
};

import errors from "http-errors";
import Post from "../../models/Post.js";

const { NotFound } = errors;

export const getAllPosts = async (req, res) => {
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const post = await Post.find({}, { skip, limit: Number(limit) }).populate(
    "owner"
  );

  if (!post) {
    throw new NotFound("Not found posts");
  }
  res.json(post);
};

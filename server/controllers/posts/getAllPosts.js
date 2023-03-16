import errors from "http-errors";
import Post from "../../models/Post.js";

const { NotFound } = errors;

export const getAllPosts = async (req, res) => {
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const posts = await Post.find({}, { skip, limit: Number(limit) }).populate(
    "owner",
    " _id firstName lastName occupation location picturePath"
  );

  if (!posts) {
    throw new NotFound("Not found posts");
  }
  res.json(posts);
};

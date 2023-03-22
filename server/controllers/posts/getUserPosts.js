import mongoose from "mongoose";
import errors from "http-errors";
import Post from "../../models/Post.js";

const { NotFound } = errors;

export const getUserPosts = async (req, res) => {
  const { id } = req.params;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const posts = await Post.find(
    { owner: id },
    {},
    {
      skip,
      limit: Number(limit),
    }
  ).populate("owner", "_id firstName lastName occupation location picturePath");
  console.log(posts);
  if (!posts) {
    throw new NotFound("Not found posts");
  }
  res.status(200).json(posts);
};

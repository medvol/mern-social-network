import errors from "http-errors";
import Post from "../../models/Post.js";

const { NotFound } = errors;

export const getAllPosts = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  console.log(limit);
  const posts = await Post.find({}, " -updatedAt", {
    skip,
    limit: Number(limit),
  })
    .populate({
      path: "comments",
      populate: {
        path: "author",
        select: " _id firstName lastName occupation picturePath ",
      },
    })
    .populate("owner", "_id firstName lastName occupation location picturePath")
    .sort({ createdAt: -1 });

  if (!posts) {
    throw new NotFound("Not found posts");
  }
  res.json(posts);
};

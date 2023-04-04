import errors from "http-errors";
import Post from "../../models/Post.js";

const { NotFound } = errors;

export const commentPost = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findByIdAndUpdate(
    id,
    { $push: { comments: req.body } },
    { new: true }
  )
    .populate({
      path: "comments",
      populate: {
        path: "author",
        select: " _id firstName lastName occupation picturePath ",
      },
    })
    .populate(
      "owner",
      " _id firstName lastName occupation location picturePath"
    );

  if (!post) {
    throw new NotFound("Not found posts");
  }

  res.status(200).json(post);
};

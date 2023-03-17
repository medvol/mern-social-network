import errors from "http-errors";
import Post from "../../models/Post.js";

const { NotFound, Conflict } = errors;

export const likePost = async (req, res) => {
  const { id } = req.params;
  const { _id: userId } = req.user;
  const post = await Post.findById(id);

  if (!post) {
    throw new NotFound("Not found posts");
  }

  const isLiked = post.likes.includes(userId);

  if (isLiked) {
    throw new Conflict("You already liked this post");
  }

  const updatedLikes = [...post.likes, userId];
  const update = { $set: { likes: updatedLikes } };
  const updatedPost = await Post.findByIdAndUpdate({ _id: id }, update, {
    new: true,
  });

  res.status(200).json(updatedPost);
};

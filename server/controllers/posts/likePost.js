import errors from "http-errors";
import Post from "../../models/Post.js";

const { NotFound, Conflict } = errors;

export const likePost = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;
  const post = await Post.findById(id);
  if (!post) {
    throw new NotFound("Not found posts");
  }
  const isLiked = post.likes.get(userId);

  if (isLiked) {
    throw new Conflict("You already like with post");
  }
  post.likes.set(userId, true);

  const updatedPost = await Post.findByIdAndUpdate(
    id,
    { likes: post.likes },
    { new: true }
  );

  res.status(200).json(updatedPost);
};

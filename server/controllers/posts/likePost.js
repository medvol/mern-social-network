import errors from "http-errors";
import Post from "../../models/Post.js";

const { NotFound } = errors;

export const likePost = async (req, res) => {
  const { id } = req.params;
  const { _id: userId } = req.user;
  const post = await Post.findById(id);

  if (!post) {
    throw new NotFound("Not found posts");
  }

  const userIdIndex = post.likes.indexOf(userId);

  if (userIdIndex !== -1) {
    post.likes.splice(userIdIndex, 1);
  } else {
    post.likes.push(userId);
  }
  post.populate(
    "owner",
    " _id firstName lastName occupation location picturePath"
  );
  const updatedPost = await post.save();

  res.status(200).json(updatedPost);
};

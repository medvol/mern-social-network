import Post from "../../models/Post.js";

export const createPost = async (req, res) => {
  const { _id: owner } = req.user;

  const newPost = new Post({
    owner,
    ...req.body,
  });
    newPost.populate(
      "owner",
      " _id firstName lastName occupation location picturePath"
    );
  await newPost.save();

  res.status(201).json(newPost);
};

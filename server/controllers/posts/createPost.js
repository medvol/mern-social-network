import Post from "../../models/Post.js";
import { uploadToCloudinary } from "../../helpers/UploadToCloudinary.js";

export const createPost = async (req, res) => {
  const { _id: owner } = req.user;
  const file = req.file;

  const picturePath = await uploadToCloudinary(file, "posts");

  const newPost = new Post({
    owner,
    ...req.body,
    picturePath,
  });
  newPost.populate(
    "owner",
    " _id firstName lastName occupation location picturePath"
  );
  await newPost.save();

  res.status(201).json(newPost);
};

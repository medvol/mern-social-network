import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    description: String,

    picturePath: String,

    likes: {
      type: Map,
      of: Boolean,
    },
    comments: {
      type: Array,
      default: [],
    },
  },
  { versionKey: false, timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;

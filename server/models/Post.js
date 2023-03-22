import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    description: {
      type: String,
      minLength: 2,
      maxlength: 500,
    },

    picturePath: String,

    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
    ],
    comments: {
      type: Array,
      default: [],
    },
  },
  { versionKey: false, timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;

import mongoose from "mongoose";
import Joi from "joi";
import { handleMongooseError } from "../helpers/index.js";

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

    likes: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      default: [],
    },
    comments: {
      type: Array,
      default: [],
    },

    comments: {
      type: [
        {
          author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
          },
          content: {
            type: String,
            required: true,
          },
          created_at: {
            type: Date,
            default: Date.now,
          },
        },
      ],
      default: [],
    },
  },

  { versionKey: false, timestamps: true }
);

postSchema.post("save", handleMongooseError);

const Post = mongoose.model("Post", postSchema);

export default Post;

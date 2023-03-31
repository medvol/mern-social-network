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

const addPostSchema = Joi.object({
  description: Joi.string().required().min(2).max(250),
  picturePath: Joi.string(),
  likes: Joi.string().alphanum().length(24),
  comments: Joi.object({
    author: Joi.string().alphanum().required(),
    content: Joi.string().required(),
    created_at: Joi.date().required(),
  }),
});

export default Post;

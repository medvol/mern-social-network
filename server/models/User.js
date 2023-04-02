import mongoose from "mongoose";
import Joi from "joi";
import { handleMongooseError } from "../helpers/index.js";

const emailRegexp = /^(?=.{10,63}$)([A-Za-z0-9._-]{2,}@[A-Za-z0-9._-]{2,})$/;

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "firstName is required"],
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: [true, "lastName is required"],
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      match: emailRegexp,
      unique: true,
      trim: true,
      lowercase: true,
      required: [true, "Email is required"],
      max: 50,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
      min: 5,
      default: null,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
    token: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.post("save", handleMongooseError);

export const registerSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  location: Joi.string(),
  occupation: Joi.string(),
});

export const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(3).max(30).required(),
});

const User = mongoose.model("User", userSchema);
export default User;

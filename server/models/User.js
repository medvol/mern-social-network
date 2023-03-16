import mongoose from "mongoose";

const emailRegexp = /^(?=.{10,63}$)([A-Za-z0-9._-]{2,}@[A-Za-z0-9._-]{2,})$/;

const UserSchema = new mongoose.Schema(
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
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
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

const User = mongoose.model("User", UserSchema);
export default User;

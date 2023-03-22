import bcrypt from "bcrypt";
import errors from "http-errors";
import User from "../../models/User.js";

const { Conflict } = errors;

export const register = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  }

  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  const newUser = new User({
    ...req.body,
    password: passwordHash,
    viewedProfile: Math.floor(Math.random() * 10000),
    impressions: Math.floor(Math.random() * 10000),
  });
  const savedUser = await newUser.save();
  const userWithoutPassword = await User.findById(
    savedUser._id,
    "-password"
  ).populate(
    "friends",
    " _id firstName lastName occupation location picturePath"
  );
  res.status(201).json({
    user: userWithoutPassword,
  });
};

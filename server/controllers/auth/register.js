import bcrypt from "bcrypt";
import errors from "http-errors";
import User from "../../models/User.js";
import { UserWithoutPassword } from "../../helpers/UserWithoutPassword.js";

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
  const returnedUser = UserWithoutPassword(savedUser);
  res.status(201).json({
    user: returnedUser,
  });
};

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import errors from "http-errors";
import User from "../../models/User.js";
const { Unauthorized } = errors;

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });
  if (!user) {
    throw new Unauthorized("Email or password is wrong");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Unauthorized("Email or password is wrong");
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });

  const updateUser = await User.findByIdAndUpdate(
    user._id,
    { token },
    { new: true, select: "-password" }
  ).populate(
    "friends",
    " _id firstName lastName occupation location picturePath"
  );

  res.json({
    token,
    user: updateUser,
  });
};

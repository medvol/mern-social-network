import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import errors from "http-errors";
import User from "../../models/User.js";
const { Unauthorized } = errors;

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  const isMatch = await bcrypt.compare(password, user.password);
  if (!user || !isMatch) {
    throw new Unauthorized("Email or password is wrong");
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  await User.findByIdAndUpdate(user._id, { token });

  const {
    firstName,
    lastName,
    picturePath,
    friends,
    location,
    occupation,
    viewedProfile,
    impressions,
    createdAt,
    updatedAt,
    _id,
  } = user;

  res.json({
    token,
    user: {
      firstName,
      lastName,
      email,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile,
      impressions,
      createdAt,
      updatedAt,
      _id,
    },
  });
};

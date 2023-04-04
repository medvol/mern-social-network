import errors from "http-errors";
import User from "../../models/User.js";

const { NotFound } = errors;

export const getUser = async (req, res) => {
  const { id } = req.params;
  const { _id: userId } = req.user;
  const user = await User.findById(id, "-password").populate(
    "friends",
    " _id firstName lastName occupation location picturePath"
  );
  if (!user) {
    throw new NotFound("Not found");
  }
  if (userId !== id) {
    user.viewedProfile += 1;
    await user.save();
  }

  res.json(user);
};

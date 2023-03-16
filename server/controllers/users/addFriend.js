import errors from "http-errors";
import User from "../../models/User.js";

const { NotFound } = errors;

export const addFriend = async (req, res) => {
  const { id, friendId } = req.params;
  const user = await User.findByIdAndUpdate(
    id,
    { $push: { friends: friendId } },
    { new: true }
  ).populate(
    "friends",
    " _id firstName lastName occupation location picturePath"
  );
  const friend = await User.findByIdAndUpdate(
    friendId,
    { $push: { friends: id } },
    { new: true }
  );
  if (!user || !friend) {
    throw new NotFound("Not found");
  }

  res.json(user);
};

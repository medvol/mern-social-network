import errors from "http-errors";
import User from "../../models/User.js";

const { NotFound, Conflict } = errors;

export const addFriend = async (req, res) => {
  const { id, friendId } = req.params;
  const user = await User.findById(id);

  if (!user) {
    throw new NotFound("Not found");
  }

  if (user.friends.includes(friendId)) {
    throw new Conflict("Already added as friend");
  }
  const updateUser = await User.findByIdAndUpdate(
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
  if (!friend) {
    throw new NotFound("Not found");
  }

  res.json(updateUser);
};

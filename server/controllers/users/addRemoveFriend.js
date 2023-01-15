import errors from "http-errors";
import User from "../../models/User.js";

const { NotFound } = errors;

export const addRemoveFriend = async (req, res) => {
  const { id, friendId } = req.params;
  const user = await User.findById(id);
  const friend = await User.findById(friendId);
  if (!user || !friend) {
    throw new NotFound("Not found");
  }

  if (user.friends.includes(friendId)) {
    user.friends = user.friends.filter((id) => id !== friendId);
    friend.friends = friend.friends.filter((id) => id !== id);
  } else {
    user.friends.push(friendId);
    friend.friends.push(id);
  }
  await user.save();
  await friend.save();

  const friends = await Promise.all(
    user.friends.map((id) => User.findById(id))
  );
  const formattedFriends = friends.map(
    ({ _id, firstName, lastName, occupation, location, picturePath }) => {
      return { _id, firstName, lastName, occupation, location, picturePath };
    }
  );

  res.json(formattedFriends);
};

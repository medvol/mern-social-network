import errors from "http-errors";
import User from "../../models/User.js";

const { NotFound } = errors;

export const deleteFriend = async (req, res) => {
  const { id, friendId } = req.params;
   const user = await User.findById(id);

   if (!user) {
     throw new NotFound("Not found user");
   }

   if (!user.friends.includes(friendId)) {
     throw new NotFound(`${friendId} is not your friend`);
   }
  const updateUser = await User.findByIdAndUpdate(
    id,
    { $pull: { friends: friendId } },
    { new: true, select: "-password" }
  ).populate(
    "friends",
    " _id firstName lastName occupation location picturePath"
  );
  const friend = await User.findByIdAndUpdate(
    friendId,
    { $pull: { friends: id } },
    { new: true }
  );
  if (!user || !friend) {
    throw new NotFound("Not found");
  }

  res.json(updateUser);
};

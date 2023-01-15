import errors from "http-errors";
import User from "../../models/User.js";

const { NotFound } = errors;

export const getUserFriends = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    throw new NotFound("Not found user");
  }

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

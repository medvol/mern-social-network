import errors from "http-errors";
import User from "../../models/User.js";

const { NotFound } = errors;

export const recommendedUsers = async (req, res) => {
  const {_id:userId, friends} = req.user;
  const allUsers = await User.find({
    _id: { $ne: userId },
    Followers: { $ne: userId },
  }).select("_id firstName lastName occupation location picturePath");
     if (!allUsers) {
       throw new NotFound("Not found users");
     }
  const recommendedUsers = allUsers.filter(
    (item) => !friends.includes(item._id)
  );

 

  res.json(recommendedUsers);
};

import errors from "http-errors";
import User from "../../models/User.js";
import { UserWithoutPassword } from "../../helpers/UserWithoutPassword.js";

const { NotFound } = errors;

export const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    throw new NotFound("Not found");
  }
  const returnedUser = UserWithoutPassword(user);

  res.json(returnedUser);
};

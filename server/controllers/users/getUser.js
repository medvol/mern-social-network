import errors from "http-errors";
import User from "../../models/User.js";

const { NotFound } = errors;

export const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id, "-password");
  if (!user) {
    throw new NotFound("Not found");
  }

  res.json(user);
};

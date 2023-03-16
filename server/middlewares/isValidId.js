import mongoose from "mongoose";
import errors from "http-errors";

const { BadRequest } = errors;

export const isValidId = (req, _, next) => {
  const { id} = req.params;

  if (!mongoose.isValidObjectId(userId)) {
    const error = BadRequest(`${userId} is not correct format`);
    next(error);
  }
  next();
};

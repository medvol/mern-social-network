import mongoose from "mongoose";
import errors from "http-errors";

const { BadRequest } = errors;

export const isValidId = (req, _, next) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    const error = BadRequest(`${id} is not correct format`);
    next(error);
  }
  next();
};

import jwt from "jsonwebtoken";
import errors from "http-errors";
import User from "../models/User.js";
const { Forbidden, Unauthorized } = errors;

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      throw new Forbidden("Access denied");
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById({ _id: verified.id });

    if (!user) {
      return done(new Unauthorized("Not authorized"));
    }
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

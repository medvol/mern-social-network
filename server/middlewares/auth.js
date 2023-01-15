import jwt from "jsonwebtoken";
import errors from "http-errors";
const { Forbidden } = errors;

export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    if (!token) {
      throw new Forbidden("Access denied");
    }

    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

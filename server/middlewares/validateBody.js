import errors from "http-errors";

const { BadRequest } = errors;

export const validateBody = (schema) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      throw new BadRequest(error.message);
    }
    next();
  };

  return func;
};

export const UserWithoutPassword = (obj) => {
  const { password } = obj;

  if (password) {
    delete obj._doc.password;
    return obj;
  }

  return obj;
};

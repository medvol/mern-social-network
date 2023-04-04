export const sortComments = (comments) => {
  if (comments.length < 2) return [...comments];
  return [...comments].sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });
};

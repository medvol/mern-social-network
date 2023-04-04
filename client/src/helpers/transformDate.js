export const transformDate = (createdAt) => {
  const now = new Date();
  const created = new Date(createdAt);
  const elapsed = now - created;

  const oneMinute = 60 * 1000;
  const oneHour = 60 * oneMinute;
  const oneDay = 24 * oneHour;
  const oneWeek = 7 * oneDay;

  if (elapsed < oneMinute) {
    return "just now";
  } else if (elapsed < oneHour) {
    const minutes = Math.floor(elapsed / oneMinute);
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else if (elapsed < oneDay) {
    const hours = Math.floor(elapsed / oneHour);
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (elapsed < oneWeek) {
    const days = Math.floor(elapsed / oneDay);
    return `${days} day${days === 1 ? "" : "s"} ago`;
  } else {
    const weeks = Math.floor(elapsed / oneWeek);
    return `${weeks} week${weeks === 1 ? "" : "s"} ago`;
  }
};

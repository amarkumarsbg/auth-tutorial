export const formatDAte = (dateString) => {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return "Invalid DAte";
  }

  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

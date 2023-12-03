// lib/utils.js
export const truncateString = (str, num) => {
  if (str === undefined) {
    return str;
  }

  if (str.length <= num || str === undefined) {
    return str;
  }

  return str.slice(0, num) + "...";
};

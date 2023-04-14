const capitalize = (string) => {
  const result = string.charAt(0).toUpperCase() + string.slice(1);
  return result;
};

module.exports = capitalize;
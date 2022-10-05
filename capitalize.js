const tocaptialize = (string) => {
  return string.charAt(0).toLocaleUpperCase() + string.slice(1);
}

module.exports = tocaptialize;
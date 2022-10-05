const pre = (string) => {
  const x = string.length;
  if(x < 1 || x > 10){
    throw new Error("out of bound exception")
  } else {
    return string.length;
  }
  
};

module.exports = pre;
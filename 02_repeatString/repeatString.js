const repeatString = function (msg, num) {
  if (num < 0) {
    return "ERROR";
  }
  let word = "";
  for (let i = 0; i < num; i++) {
    word += msg;
  }
  return word;
};

// Do not edit below this line
module.exports = repeatString;

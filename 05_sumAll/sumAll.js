const sumAll = function (num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  }
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }
  if (num1 > num2) {
    let newNum1 = num1;
    num1 = num2;
    num2 = newNum1;
  }
  let total = 0;
  for (let i = num1; i <= num2; i++) {
    total += i;
  }
  return total;
};

// Do not edit below this line
module.exports = sumAll;

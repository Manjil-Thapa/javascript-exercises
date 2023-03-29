const removeFromArray = function (arr, ...args) {
  const newArr = [];
  arr.forEach((items) => {
    if (!args.includes(items)) {
      newArr.push(items);
    }
  });
  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

const myRemoveWithoutCopy = (arr, item) => {
  arr.forEach((element, index, array) => {
    element === item ? array.splice(index, 1) : arr
  });
  return arr;
};

module.exports = myRemoveWithoutCopy;
// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverseInt = n => {
  const revertN = parseInt(String(n).split('').reverse().join(''));
  return (n < 0) ? -revertN : revertN;
};

module.exports = reverseInt;

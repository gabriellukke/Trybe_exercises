const assert = require('assert');
// escreva a função wordLengths para passar nos testes abaixo:
const wordLengths = arr => {
  let newArray = [];
  for (let i in arr) {
    newArray.push(arr[i].length);
  }
  return newArray;
};
//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);

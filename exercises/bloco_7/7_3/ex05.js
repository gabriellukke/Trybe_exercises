const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// Test 1
assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);

// Test 2
assert.notEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]);

// Test 3
const testArray = [1, 2, 3, 4];
myRemoveWithoutCopy(testArray, 3);
assert.notEqual(testArray, [1, 2, 3, 4]);

// Test 4
assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);
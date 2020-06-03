const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// Test 1
assert.equal(mySum([1, 2, 3, 4]), 10);

// Test 2
assert.equal(mySum([1, -2, -3, 4]), 0);

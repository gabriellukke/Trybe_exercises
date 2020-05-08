const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// Test 1
assert.equal(sum(4, 5), 9);

// Test 2
assert.equal(sum(0, 0), 0);

// Test 3
assert.throws(() => { sum(4, '5') }, Error);

// Test 4
assert.throws(() => { sum(4, '5') }, /^Error: parameters must be numbers/);
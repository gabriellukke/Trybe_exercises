const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// Test 1
assert.equal(myFizzBuzz(15), 'fizzbuzz');

// Test 2
assert.equal(myFizzBuzz(6), 'fizz');

// Test 3
assert.equal(myFizzBuzz(10), 'buzz');

// Test 4
assert.equal(myFizzBuzz(7), 7);

// Test 5
assert.equal(myFizzBuzz('toot'), false);
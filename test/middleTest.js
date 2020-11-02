/*
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);
*/
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle",() => {
  it("reutrns [2] for [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]),[2]);
  });
  it("reutrns [2,3] for [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]),[2,3]);
  });
  it("reutrns [] for [1]", () => {
    assert.deepEqual(middle([1]),[]);
  });
  it("reutrns [] for [2,3]", () => {
    assert.deepEqual(middle([2,3]),[]);
  });
  
});
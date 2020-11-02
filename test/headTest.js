
//const assertEqual = require('../assertEqual');

/* test code
assertEqual(head([5,6,7]), 5);
console.log(head([]));
console.log(head([1]));
*/


const head = require('../head');
const assert = require('chai').assert;
describe("#head",() => {
  it("reutrns 1 for [1,2,3]", () => {
    assert.strictEqual(head([1,2,3]),1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns 'Hello' for ['Hello','L','Lab']", () => {
    assert.strictEqual(head(['Hello','L','Lab']), 'Hello');
  })
});
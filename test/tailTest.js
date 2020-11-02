//const assertEqual = require('../assertEqual');


/*
console.log(tail([1]));==>[]
console.log(tail([]));==>[]
*/
const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail",() => {
  it("reutrns [2,3] for [1,2,3]", () => {
    assert.deepEqual(tail([1,2,3]),[2,3]);
  });
  it("returns ['L','Lab'] for ['Hello','L','Lab']", () => {
    assert.deepEqual(tail(['Hello','L','Lab']), ['L','Lab']);
  })
});
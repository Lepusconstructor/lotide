
const eqArrays = require('./eqArrays');


const assertArraysEqual = (actual, expected) =>{
  if (eqArrays (actual, expected) === true) {
    console.log(`⭕Arrays are equal: "${actual}" === "${expected}"`);
  } else {
    console.log(`❌Arrays not equal: "${actual}" !== "${expected}"`);
  }

};
module.exports = assertArraysEqual;

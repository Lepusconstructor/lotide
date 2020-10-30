const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

//eqArrays
const eqArrays = (actual, expected) =>{
  if (actual.length !== expected.length){
    return false;
  }
  for (let i = 0; i < actual.length; i++){
    if (actual[i] !== expected[i]){
      return false;
    }
  }
  return true;
}
//assertArraysEqual
const assertArraysEqual = (actual, expected) =>{
  if (eqArrays (actual, expected) === true) {
    console.log(`⭕Arrays are equal: "${actual}" === "${expected}"`);
  } else {
    console.log(`❌Arrays not equal: "${actual}" !== "${expected}"`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
//callbacks
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);console.log(results1);

assertArraysEqual(results1,["g","c","t","m","t"]);
assertArraysEqual(results2,[6,7,2,5,3]);
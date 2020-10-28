

const eqArrays = (actual, expected) =>{
  if (actual.length !== expected.length){
    return false;
  }
  for (let i = 0; i < actual.length; i++){
    if (actual[i] !== expected[i]){
      return false;
    }
    return true;
  }
}
const assertArraysEqual = (actual, expected) =>{
  if (eqArrays (actual, expected) === true) {
    console.log(`⭕Arrays are equal: "${actual}" === "${expected}"`);
  } else {
    console.log(`❌Arrays not equal: "${actual}" !== "${expected}"`);
  }

};
// a function naemd without return a subset of a given array, removing unwanted elements.
//This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.
const without = (source, itemsToRemove) =>{
  let newArr = source;
  let filtered = newArr.filter(element => !itemsToRemove.includes(element));
  return filtered;
}
console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
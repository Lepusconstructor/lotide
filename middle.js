const eqArrays = (actual, expected) =>{
  if (actual.length === 0 && expected.length === 0){
    return true;
  }
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
//take in an array and return the middle-most element(s) of the given array.
/*
The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

For arrays with one or two elements, there is no middle. Return an empty array.
middle([1]) // => []
middle([1, 2]) // => []
For arrays with odd number of elements, an array containing a single middle element should be returned.
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
For arrays with an even number of elements, an array containing the two elements in the middle should be returned
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
*/
const middle = (argArr) =>{
  
  let newArr = [];
  if (argArr.length < 3){
    newArr = [];
  } else if (argArr.length >= 3){
    if (argArr.length % 2 === 0){
      newArr.push(argArr[argArr.length / 2 - 1], argArr[argArr.length / 2]);
    } else if (argArr.length % 2 !== 0){
    newArr.push(argArr[Math.trunc(argArr.length / 2)]);
  } 
  }
  return newArr;
}
/*
console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
*/

assertArraysEqual(middle([1,2]), []);
assertArraysEqual(middle([1]),[]);
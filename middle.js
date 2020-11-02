
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
const middle = (argArr) => {
  
  let newArr = [];
  let arrLength = argArr.length;
  if (arrLength < 3) {
    newArr = [];
  } else if (arrLength >= 3) {
    if (arrLength % 2 === 0){ 
      newArr.push(argArr[arrLength / 2 - 1], argArr[arrLength / 2]);
    } else if (arrLength % 2 !== 0) {
    newArr.push(argArr[Math.trunc(arrLength / 2)]);
  } 
  }
  return newArr;
}
module.exports = middle;

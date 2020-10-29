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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(obj1, obj2) {
  //check if they have the same numbers of keys
  let arr1 = Object.keys(obj1);//output is an array of its keys
  let arr2 = Object.keys(obj2);
  if (arr1.length !== arr2.length){
    return false;
  } 

  for (let item of arr1){
//check if the value for each key in one obj is the same as the other
    if (arr1[item] !== arr2[item]){//if (!obj2[item])
        return false;
      }
    if (Array.isArray(obj1[item])){
      if (!eqArrays(obj1[item],obj2[item])){
        return false;
      } 
    } else {
      if (obj1[item] !== obj2[item]){
        return false;
      }
    } 
  }
  return true;
};

const assertObjectsEqual = (actual, expected) =>{
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`⭕Objects are equal: "${inspect(actual)}" === "${inspect(expected)}"`);
  } else {
    console.log(`❌Objects not equal: "${inspect(actual)}" !== "${inspect(expected)}"`);
  }

};
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);
assertObjectsEqual(cd2, dc);
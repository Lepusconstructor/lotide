const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭕Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`❌Assertion Failed: "${actual}" !== "${expected}"`);
  }

};
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
    if (Array.isArray(obj1[item])){//check for nested array
      if (!eqArrays(obj1[item],obj2[item])){//use eqArray to check if the arrays are equal
        return false;
      } 
    }
    else {
      if (obj1[item] !== obj2[item]){
        return false;
      }
    } 
  }
  return true;
};

//primitive test
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab,ba),true);
const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab,abc),false);

//array as value test
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc),true);
const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2),false);

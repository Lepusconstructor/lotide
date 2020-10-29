

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
const assertArraysEqual = (actual, expected) =>{
  if (eqArrays (actual, expected) === true) {
    console.log(`⭕Arrays are equal: "${actual}" === "${expected}"`);
  } else {
    console.log(`❌Arrays not equal: "${actual}" !== "${expected}"`);
  }

};
// string: a strings that we need to look through
const letterPositions = string =>{
  const letters = {}; //create a collector
  //use for of to loop through the string
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") { 
      if (letters[string[i]]) {
        letters[string[i]].push(i);//this happen after the else and add on to it
      } else {
        //this actually happen first cuz the result obj was empty
        letters[string[i]] = [i]; 
      }
    }
  }
  return letters;
}
let test = letterPositions("hello"); //should output {h: [0],e: [1],l: [2,3],o: [4]};
assertArraysEqual(test["h"],[0]);
assertArraysEqual(test["e"],[1]);
assertArraysEqual(test["l"],[2,3]);
assertArraysEqual(test["o"],[4]);
assertArraysEqual(letterPositions("hello").e,[1]);

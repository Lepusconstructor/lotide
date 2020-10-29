


const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭕Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`❌Assertion Failed: "${actual}" !== "${expected}"`);
  }

};
//takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
const findKeyByValue = (obj,val) =>{
  for (var key in obj){//loop thru obj
    if (val === obj[key]){
      return key;
    }
  }
}
//test
const objj = {
  time: "nine o'clock",
  date: "Oct 28th",
  season: "late fall"
};
console.log(findKeyByValue(objj,"late fall"));

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
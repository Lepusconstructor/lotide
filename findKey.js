const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭕Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`❌Assertion Failed: "${actual}" !== "${expected}"`);
  }

};

// takes in an object and a callback. scan the object and return the first key for which the callback returns a truthy value. If no key is found, return undefined.
const findKey = (obj,callback) =>{
  for (var key in obj){//loop thru obj
    if (callback(obj[key])){//passing obj[key] so the callback knows what key it is
      return key;
    } 
}
}


const myObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}
const back = key => key.stars === 2;
assertEqual(findKey(myObj,back),"noma" );

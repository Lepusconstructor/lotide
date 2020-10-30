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

//return a slice of the array with elements taken from the beginning, it will keep going until the callback returns a truthy value
const takeUntil = function(array, callback) {
  let collect = [];
   for (let item of array){
    if (callback(item)){
    return collect;
  } else {
    collect.push(item);
  }
  
}
return collect;
}

//expected input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
//callback
const results1 = takeUntil(data1, item => item < 0);
const results2 = takeUntil(data2, item => item === ',');
console.log(results1);
console.log(results2);
/*
expected output
[ 1, 2, 5, 7, 2 ]
[ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/
//test
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
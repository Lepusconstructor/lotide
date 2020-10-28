

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
assertArraysEqual(['ladies','that','code'],['ladies','that','code']);
assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual(['they','rock'],[1,2,3]);
assertArraysEqual(['1',2,3],[1,2,3]);
assertArraysEqual([1,2,3,4],[1,2,3]);

const assertEqual = require('./assertEqual');
/*
1.Compare the length. If lengths are not equal => return false
2.Compare each element in one for loop. When one pair of element would not be equal => return false
3.We check negative cases. If they don't return false, so we return true.
*/
//compare value by looping

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
module.exports = eqArrays;

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`⭕Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`❌Assertion Failed: "${actual}" !== "${expected}"`);
  }

};
// string: a strings that we need to look through
const countLetters = string =>{
  const letters = {}; //create a counter
  //use for of to loop through the string
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") { 
      if (letters[string[i]]) {
        letters[string[i]] += 1;//this happen after the else and add on to it
      } else {
        //this actually happen first cuz the result obj was empty
        letters[string[i]] = 1; 
      }
    }
  }
  return letters;
}



const lhl = 'lighthouse in the house';
console.log(countLetters(lhl));
assertEqual(countLetters(lhl)['i'],2);

const apple = 'big apple'
const countApple = countLetters(apple);
assertEqual(countApple['g'], 1);
assertEqual(countApple['p'],2)
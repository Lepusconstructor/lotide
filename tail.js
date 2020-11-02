
const assertEqual = require('./assertEqual');

const tail = array => {
  let newArr = array.slice(1);
  return newArr;
};

module.exports = tail;

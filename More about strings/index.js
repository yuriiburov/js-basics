// // check if word

// 'use strict';

// const isLetter = (c) => c.toLowerCase() !== c.toUpperCase();

// /**
//  * @param {string} str
//  * @return {boolean}
//  */
// function isValidWord(str) {
//   let moreThan = null;
//   const strArr = str.split('');

//   for (let i = 0; i < strArr.length; i++) {
//     if (isLetter(strArr[i]) === false) {
//       moreThan = false;
//       break;
//     } else {
//       moreThan = true;
//     }
//   }
//   if (moreThan && str.length > 1) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // examples
// console.log(isLetter('h')); // ==> true
// console.log(isLetter('W')); // ==> true
// console.log(isLetter('@')); // ==> false
// console.log(isLetter('1')); // ==> false

// console.log(isValidWord('hello')); // ==> true
// console.log(isValidWord('Hello')); // ==> true
// console.log(isValidWord('Test@')); // ==> false
// console.log(isValidWord('someName1')); // ==> false
// console.log(isValidWord('It is me')); // ==> false

// // capitalize

// /**
//  * @param {string} str
//  * @return {string}
//  */
// let capitalize = (str) => {
//   let firstLetter = str[0].toUpperCase();
//   return firstLetter + str.slice(1)
// };

// // examples
// console.log(capitalize('cake')); // ==> Cake
// console.log(capitalize('Monday')); // ==> Monday
// console.log(capitalize('hello, it is me')); // ==> Hello, it is me

// // abreviation

// /**
//  * @param {string} str
//  * @return {string}
//  */
// function getAbbreviation(str) {
//   const strArr = str.split(' ');
//   let firstLetter = '';
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i].length > 2) {
//       firstLetter += strArr[i][0].toUpperCase();
//     }
//   }
//   return firstLetter;
// }

// // examples
// console.log(getAbbreviation('some company name')); // ===> SCN
// console.log(getAbbreviation('Union of Soviet Socialist Republics')); // ===> USSR
// console.log(getAbbreviation('United States')); // ===> US

// camelCase

/**
 * @param {string} str
 * @return {string}
 */
function camelCase(str) {
  let firstIndex = '';
  const strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== strArr[0]) {
      firstIndex += strArr[i][0].toUpperCase() + strArr[i].slice(1);
    } else {
      firstIndex += strArr[i][0] + strArr[i].slice(1);
    }
  }
  return firstIndex;
}

// examples
console.log(camelCase('some function name')); // ===> someFunctionName
console.log(camelCase('get message')); // ===> getMessage
console.log(camelCase('render tasks list')); // ===> renderTasksList

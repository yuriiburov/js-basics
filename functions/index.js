// // sayWelcome

// function sayWelcome() {
//     console.log("Hello, user! Have a good day!")
// }

// sayWelcome();

// // Say welcome with params

// function sayWelcome(userName, currentDay) {
//   console.log('Hello, ' + userName + '! Have a good ' + currentDay + '!');
// }

// sayWelcome('Yura', 'Friday');

// // Get welcome message

// function getWelcomeMessage(userName, currentDay) {
//   return 'Hello, ' + userName + '! Have a good ' + currentDay + '!';
// }

// // simple function

// function min(firstNumber, secondNumber) {
//     if (firstNumber < secondNumber) {
//         return firstNumber;
//     }
// }

// console.log(min(100, 40));
// console.log(min(30, 50));

// // More then one return

// function min(firstNumber, secondNumber) {
//   if (firstNumber < secondNumber) {
//     return firstNumber;
//   } else {
//     return secondNumber;
//   }
// }

// console.log(min(100, 40));
// console.log(min(30, 50));

// // Function expression

// const min = function (firstNumber, secondNumber) {
//   if (firstNumber < secondNumber) {
//     return firstNumber;
//   } else {
//     return secondNumber;
//   }
// }

// console.log(min(100, 40));
// console.log(min(30, 50));

// let reina = 30;
// reina = null;

// // Arrow Function

// const min = (firstNumber, secondNumber) => {
//   if (firstNumber < secondNumber) {
//     return firstNumber;
//   } else {
//     return secondNumber;
//   }
// }

// console.log(min(100, 40));
// console.log(min(30, 50));

// // Farm Area

// const countArea = (chickens, caws, pigs) =>
//   chickens * 0.2 + caws * 1.5 + pigs * 0.5;

// const countArea = function (chickens, caws, pigs) {
//     let countChickens = chickens * 0.2;
//     let countCaws = caws * 1.5;
//     let countPigs = pigs * 0.5;
//     return countChickens + countCaws + countPigs;
// }

// function countArea(chickens, caws, pigs) {
//   return (chickens * 0.2) + (caws * 1.5) + (pigs * 0.5);
// }

// console.log(countArea(10, 10, 10) + ' ___22');
// console.log(countArea(10, 0, 1) + ' ___2.5');
// console.log(countArea(6, 3, 5) + ' ___8.2');

// // Count commission

// 'use strict';

// /**
//  * @param {number} amount
//  * @param {string} currency
//  * @return {number}
//  */

// function interest(amount, proc) {
//   return (amount / 100) * proc;
// }

// function actionAudit(amount, min, proc1, proc2) {
//   if (amount <= min) {
//     return interest(amount, proc1);
//   } else {
//     return interest(amount, proc2);
//   }
// }

// function countCommision(amount, currency) {
//   if (currency === 'UAH') {
//     return actionAudit(amount, 1000, 2, 1);
//   } else if (currency === 'USD') {
//     return actionAudit(amount, 5000, 0.5, 0.25);
//   } else if (currency === 'EUR') {
//     return actionAudit(amount, 3000, 0.75, 0);
//   }
// }

// // examples
// console.log(countCommision(20000, 'USD')); // ===> 50
// console.log(countCommision(500, 'UAH')); // ===> 10
// console.log(countCommision(2000, 'UAH')); // ===> 20
// console.log(countCommision(2000, 'EUR')); // ===> 15
// console.log(countCommision(4000, 'EUR')); // ===> 0
// //  hardest examples
// console.log('hardest examples');
// console.log(countCommision(1000, 'UAH')); // ===>   10  //  20
// console.log(countCommision(5000, 'USD')); // ===> 12.5  //  25
// console.log(countCommision(3000, 'EUR')); // ===>    0  //  22.5

// // convert to mills

// 'use strict';

// /**
//  * @param {number} minutes
//  * @param {number} seconds
//  * @param {number} mills
//  * @return {number}
//  */

// function convertMills(minutes, seconds, mills) {
//   let minute = (minutes) => minutes * 60000;
//   let second = (seconds) => seconds * 1000;
//   let mill = (mills) => mills * 1;
//   return minute(minutes) + second(seconds) + mill(mills);
// }

// // examples
// console.log(convertMills(1, 2, 100)); // ===> 62100
// console.log(convertMills(0, 2, 100)); // ===> 2100
// console.log(convertMills(5, 11, 230)); // ===> 311230

// // can buy product

// 'use strict';

// /**
//  * @param {number} price
//  * @param {number} balance
//  * @return {boolean}
//  */
// function canBuyProduct(price, balance) {
//   let mainBalance = balance - price;
//   if (mainBalance < 500) {
//     return false;
//   }
//   return true;
// }

// // examples
// console.log(canBuyProduct(100, 600)); // ===> true
// console.log(canBuyProduct(150, 600)); // ===> false
// console.log(canBuyProduct(1000, 1290)); // ===> false
// console.log(canBuyProduct(101, 600)); // ===> false
// console.log(canBuyProduct(299, 800)); // ===> true
// console.log(canBuyProduct(-1000, 1290)); // ===> true
// console.log(canBuyProduct(1000, Infinity)); // ===> true

// get max

function getMax(first, second, third) {
  if (first <= !second) {
    return second;
  } else if (first <= third) {
    return third;
  } else if (second <= first) {
    return first;
  } else if (second <= !third) {
    return third;
  } else if (third <= !first) {
    return first;
  } else if (third <= second) {
    return second;
  }
}

// examples
console.log(getMax(10, 20, 30)); // ===> 30
console.log(getMax(100, 20, 30)); // ===> 100
console.log(getMax(0, 0, 0)); // ===> 0
console.log(getMax(40, 20, 30)); // ===> 
console.log(getMax(100, 110, 30)); // ===> 
console.log(getMax(0, 0, 1)); // ===> 

// // sum of millions

// 'use strict';

// /**
//  * @return {number}
//  */

// function sumOfMillions() {
//   let sum = 0;
//   for (let num = 0; num <= 1000000; num++) {
//     sum += num;
//   }
//   return sum;
// }

// console.log(sumOfMillions());

// examples
// sumOfMillions function should calculate and return sum from 0 + 1 + 2 + ... + 10000000

// function sumOfMillions() {
//   let sum = 1;
//   for (let i = sum; sum <= 10; i++) {
//     i += sum;
//     console.log(i);
//   }
// }
// sumOfMillions();

// // Factorial

// 'use strict';

// /**
//  * @param {number} num
//  * @return {number}
//  */
// function factorial(num) {
//   let tot = 1;
//   if (num >= 0 && num <= 100) {
//     for (let i = num; i > 1; i--) {
//       tot *= i;
//     }
//     return tot;
//   }
// }

// // examples
// console.log(factorial(3)); // ===> 6
// console.log(factorial(5)); // ===> 120
// console.log(factorial(0)); // ===> 1

// // Compare sums

// 'use strict';

// /**
//  * @param {number} from
//  * @param {number} to
//  * @return {number}
//  */
// function sum(from, to) {
//   let result = 0;
//   for (; from <= to; from++) {
//     result += from;
//   }
//   return result;
// }

// /**
//  * @param {number} firstFrom
//  * @param {number} firstTo
//  * @param {number} secondFrom
//  * @param {number} secondTo
//  * @return {boolean}
//  */
// function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
//   // hint: you should use sum function inside compareSums
//   const first = sum(firstFrom, firstTo);
//   const second = sum(secondFrom, secondTo);
//   if (first <= second) {
//       return false;
//   } else {
//       return true;
//   }
// }
// // examples
// console.log(sum(5, 10)); // ===> 45
// console.log(sum(11, 11)); // ===> 11

// console.log(compareSums(5, 10, 5, 10)); // ===> false
// console.log(compareSums(5, 15, 3, 5)); // ===> true
// console.log(compareSums(-2, 5, 5, 9)); // ===> false

// send party invitations

// 'use strict';

// function sendEmail() {
//   console.log('Gromcode party invitation was sent!');
// }

// function sendEmailList() {
//   // hint: you should use sendEmail function inside sendEmailList
//   for (let i = 1; i <= 30; i++) {
//       sendEmail();
//   }
// }
// sendEmailList();

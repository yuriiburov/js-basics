// // array max

// 'use strict';

// /**
//  * @param {number[]} arr
//  * @return {number}
//  */
// function getMax(arr) {
//   let max = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// // examples
// console.log(getMax([22, 4, 18, -1, 111, 100, 48])); // ===> 111
// console.log(getMax([1, 1, 1, 1])); // ===> 1
// console.log(getMax([0])); // ===> 0

// ===>

// // big transaction

// 'use strict';

// /**
//  * @param {number[]} transactions
//  * @param {number} amount
//  * @return {number[]}
//  */
// function getBigTransactions(transactions, amount) {
//   let newArr = [];
//   for (let i = 0; i < transactions.length; i++) {
//     if (transactions[i] > amount) {
//       newArr.push(transactions[i]);
//     }
//   }
//   return newArr;
// }

// // examples
// console.log(getBigTransactions([110, 58, 2500, 9000, 462, 256], 100)); // ===> [110, 2500, 9000, 462, 256]
// console.log(getBigTransactions([110, 58, 2500, 9000, 462, 256], 1000)); // ===> [2500, 9000]
// console.log(getBigTransactions([110, 58, 2500, 9000, 462, 256], 9500)); // ===> []

// ======>

// // get uniques

// 'use strict';

// /**
//  * @param {number[]} arr
//  * @return {number[]}
//  */
// function getUniques(arr) {
//   let newArr = [];
//   for (let i of arr) {
//     if (!newArr.includes(i)) {
//       newArr.push(i);
//     }
//   }
//   return newArr;
// }

// // examples
// console.log(getUniques([1, 2, 1, 5, 18, 5, 2, 1, 9])); // ===> [1, 2, 5, 9, 18]
// console.log(getUniques([2, 2, 2, 2, 2, 5])); // ===> [2, 5]
// console.log(getUniques([1])); // ===> [1]

// ============>

// balance

'use strict';

/**
 * @param {object[]} transactions
 * @return {number}
 */
function getTotalBalance(transactions) {
  let res = 0;
  for (let key in transactions) {
    res += transactions[key].amount;
  }
  return res;
}

// examples
const dayTransactions = [
  { id: 1001, amount: 60 },
  { id: 1002, amount: -160 },
  { id: 1003, amount: 2000 },
  { id: 1004, amount: -500 },
  { id: 1005, amount: 136 },
];

console.log(getTotalBalance(dayTransactions)); // ===> 1536
// explanation: 60 - 160 + 2000 - 500 + 136 = 1536

// ========================>

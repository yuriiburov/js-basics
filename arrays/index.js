// 'use strict';

// const students = [
//   'Andrey',
//   'Denis',
//   'Alex',
//   'Nastya',
//   'Ninja',
//   'Skywoker',
//   'Joda',
//   'Leo',
// ];

// // put your code here
// console.log(students[2]);
// console.log(students[6]);
// console.log(students[0]);
// console.log(students[students.length - 1]);
// console.log(students.length);

// // iterate array

// 'use strict';

// /**
//  * @param {array} arr
//  */

// let array = [10, 8, 6, 4, 2, 0];

// function printArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }
// printArray(array);

// /**
//  * @param {array} arr
//  */
// function printArrayForOf(arr) {
//   for (let i of arr) {
//     console.log(i);
//   }
// }
// printArrayForOf(array);

// // simple array methods

// 'use strict';

// /* ==================================== */
// /* ===> мутирующие методы массивов <=== */
// /* ===> изменяют исходный массив <===== */
// /* ==================================== */

// /* push - добавит элемент в конец массива */

// /**
//  * С помощью метода push добавь число 111 в конец массива arr
//  * Выведи в консоль результат работы метода push, а так же массив arr после выполнения push
//  */

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.push(111));
// console.log(arr);
// // put your code here

// /* pop - удалит из массива последний элемент и вернет его */

// /**
//  * С помощью метода pop удали последний элемент массива students
//  * Выведи в консоль результат работы метода pop, а так же массив students после выполнения pop
//  * */

// const students = ['Alex', 'Ann', 'Jaz', 'Viktor'];
// let popMethod = students.pop();
// console.log(popMethod);
// console.log(students);

// // put your code here

// /* shift - удалит из массива первый элемент и вернет его */

// /**
//  * С помощью метода shift удали первый элемент массива points
//  * Выведи в консоль результат работы метода shift, а так же массив points после выполнения shift
//  * */

// const points = [11, 24, 37, 40, 7];
// let shiftMethod = points.shift();
// console.log(shiftMethod);
// console.log(points);

// // put your code here

// /* unshift - добавит элемент в начало массива */

// /**
//  * С помощью метода unshift добавь число 22 в начало массива ages
//  * Выведи в консоль результат работы метода unshift, а так же массив ages после выполнения unshift
//  * */

// const ages = [18, 25, 31, 29, 50, 11, 1000000];
// let unshiftMethod = ages.unshift(22);
// console.log(unshiftMethod);
// console.log(ages);
// // put your code here

// /* ======================================= */
// /* ===> НЕ мутирующие методы массивов <=== */
// /* ===> НЕ изменяют исходный массив <===== */
// /* ======================================= */

// /* includes - проверяет есть ли элемент в массиве */

// /**
//  * С помощью метода includes проверь есть ли числа 0 и 100 в массиве numbers. Результат проверок выведи в консоль
//  */
// const numbers = [5, 0, 8, 10, -4, 50, 220];
// console.log(numbers.includes(0));
// console.log(numbers.includes(100));
// // put your code here

// // points

// 'use strict';

// /**
//  * @param {number[]} points
//  * @param {number} homeTeam
//  * @param {number} awayTeam
//  * @param {string} result
//  * @return {number[]}
//  */
// function addPoints(points, homeTeam, awayTeam, result) {
//     let copyPoints = points.slice();
//   if (result === 'win') {
//     copyPoints[homeTeam - 1] += 3;
//   } else if (result === 'lose') {
//     copyPoints[awayTeam - 1] += 3;
//   } else {
//     copyPoints[homeTeam - 1] += 1;
//     copyPoints[awayTeam - 1] += 1;
//   }
//   return copyPoints;
// }

// // examples
// console.log(addPoints([8, 6, 4, 1], 1, 2, 'win')); // returns ==> [11, 6, 4, 1]
// console.log(addPoints([18, 15, 8, 2, 1, 0], 1, 4, 'lose')); // returns ==> [18, 15, 8, 5, 1, 0]
// console.log(addPoints([18, 15, 8, 2, 1, 0], 5, 6, 'draw')); // returns ==> [18, 15, 8, 2, 2, 1]

// // send invitations with names

// 'use strict';

// function sendEmail(userName) {
//   console.log('Gromcode party invitation was sent to ' + userName + '!');
// }

// /**
//  * @param {string[]} userNames
//  * @return {undefined}
//  */
// let userName = ['pup', 'ublup', 'abobus'];
// function sendEmailList(userName) {
//   // hint: you should use sendEmail function inside sendEmailList function
//   for (let i = 0; i < userName.length; i++) {
//     sendEmail(userName[i]);
//   }
// }

// sendEmailList(userName);

// // Check revenue

// 'use strict';

// /**
//  * @param {number[]} sales
//  * @return {number}
//  */
// function getRevenue(sales) {
//   let revenue = 0;
//   for (let i = 0; i < sales.length; i++) {
//     revenue += sales[i];
//   }
//   return revenue;
// }

// /**
//  * @param {number[]} sales
//  * @param {number} plannedRevenue
//  * @return {boolean}
//  */
// let checkRevenue = (sales, plannedRevenue) =>
//   getRevenue(sales) > plannedRevenue;

// // examples
// console.log(getRevenue([25, 40, 10, 58])); // returns ==> 133
// console.log(checkRevenue([25, 40, 10, 58], 100)); // returns ==> true

//

// // reverse

// 'use strict';

// /**
//  * @param {number[]} arr
//  * @return {number[]}
//  */
// function reverseArray(arr) {
//   let reverseCopy = arr.slice();
//   return reverseCopy.reverse();
// }

// // examples
// console.log(reverseArray([11, 4, 8, 3])); // ==> [3, 8, 4, 11]
// console.log(reverseArray([])); // ==> []
// console.log(reverseArray([100, 50])); // ==> [50, 100]

//

// subarray

'use strict';

/**
 * @param {array} arr
 * @param {number} numberOfElements
 * @return {array}
 */
const getSubArray = (arr, numberOfElements) => arr.slice(0, numberOfElements);

// examples
console.log(getSubArray([11, 4, 8, 3], 2)); // ==> [11, 4]       5el - 2el
console.log(getSubArray([1, 2, 3, 4, 5], 3)); // ==> [1, 2, 3]   6el - 3el
console.log(getSubArray(['some string', 'hello', 'I am happy'], 1)); // ==> ['some string']    4el - 1el

// // clone

// 'use strict';

// /**
//  * @param {array} arr
//  * @return {array}
//  */
// const cloneArr = (arr) => arr.slice();

// // examples
// console.log(cloneArr([11, 4, 8, 3])); // returns ==> [11, 4, 8, 3]
// console.log(cloneArr([])); // returns ==> []
// console.log(cloneArr([0])); // returns ==> [0]

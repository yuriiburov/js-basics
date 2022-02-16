// // Objects basics

// 'use strict';

// const product = {
//   id: 5734625,
//   name: 'arur',
//   isAvailable: true,
//   price: 9876543,
//   color: 'gray',
//   storeAddress: null,
// };

// const productName = product.name;
// console.log(productName);
// const storeAddress = product['storeAddress'];
// console.log(storeAddress);

// product['deliveryOptions'] = ['Новая почта', 'Укр почта', 'Самовывоз'];
// console.log(product);

// ================= \\ ==>

// // iterate obj

// 'use strict';

// /**
//  * @param {object} obj
//  * @return {string[]}
//  */
// let getKeys = (obj) => Object.keys(obj);

// /**
//  * @param {object} obj
//  * @return {array}
//  */
// let getValues = (obj) => Object.values(obj);

// console.log(getKeys(product));
// console.log(getValues(product));

// ================== \\ =>

// // clone obj

// ('use strict');

// /**
//  * @param {object} obj
//  * @return {object}
//  */
// function copyObj(obj) {
//   const res = {};

//   for (const key in obj) {
//     res[key] = obj[key];
//   }
//   return res;
// }

// let freq = copyObj(product);

// console.log(copyObj(product));
// product.rarw = {};
// console.log(product);
// console.log(freq);

// ================ \\ ==>

// // get goal stat

// ('use strict');

// /**
//  * @param {object[]} players
//  * @return {object[]}
//  */
// function getGoalsStat(players) {
//   let res = [];
//   for (let i in players) {
//     let obj = {};
//     obj.name = players[i].name;
//     obj.team = players[i].team;
//     obj.goals = players[i].goals;
//     res.push(obj);
//   }
//   return res;
// }

// // examples
// const players = [
//   {
//     name: 'Jason Mount',
//     birthdate: '19.12.1993',
//     country: 'Deutschland',
//     number: '21',
//     team: 'Manchester United',
//     position: 'MF',
//     goals: 4,
//   },
//   {
//     name: 'Jason Mount',
//     birthdate: '01.01.2001',
//     country: 'Deutschland',
//     number: '16',
//     team: 'Manchester United',
//     position: 'MF',
//     goals: 0,
//   },
//   {
//     name: 'Finne Bard',
//     birthdate: '13.02.1995',
//     country: 'Norwegen',
//     number: '26',
//     position: 'FW',
//     team: 'Fulham United',
//     goals: 1,
//   },
//   {
//     name: 'Gerhardt Yannick',
//     birthdate: '13.03.1994',
//     country: 'Deutschland',
//     number: 31,
//     position: 'MF',
//     team: 'Liverpool',
//     goals: 8,
//   },
// ];

// console.log(getGoalsStat(players));
// // ===>
// // [
// //   { name: 'Jason Mount', team: 'Manchester United', goals: 4 },
// //   { name: 'Jason Mount, team: 'Manchester United', goals: 0 },
// //   { name: 'Finne Bard', team: 'Fulham United', goals: 1 },
// //   { name: 'Gerhardt Yannick', team: 'Liverpool', goals: 8 },
// // ];

// ============= \\ ==>

// // users count by city

// 'use strict';

// /**
//  * @param {object[]} users
//  * @return {object}
//  */
// function usersCountByCity(users) {
//   let obj = {};
//   for (let i in users) {
//     if (users[i].city in obj) {
//         obj[users[i].city]++;
//     } else {
//         obj[users[i].city] = 1;
//     }
//   }
//   return obj;
// }

// // examples
// const users = [
//   {
//     id: 888,
//     name: 'Denis',
//     age: 44,
//     city: 'Kyiv',
//   },
//   {
//     id: 333,
//     name: 'Alex',
//     age: 33,
//     city: 'Lviv',
//   },
//   {
//     id: 392,
//     name: 'Nastya',
//     age: 22,
//     city: 'Kyiv',
//   },
//   {
//     id: 123,
//     name: 'Violetta',
//     age: 15,
//     city: 'Odesa',
//   },
//   {
//     id: 640,
//     name: 'Mykola',
//     age: 31,
//     city: 'Lviv',
//   },
// ];

// console.log(usersCountByCity(users)); // ===> { 'Kyiv': 2, 'Lviv': 2, 'Odesa': 1 }

// =================== \\ ==>

// find users by name

'use strict';

/**
 * @param {object[]} users
 * @param  {string} name
 * @return {object[]}
 */
function findUsersByName(users, name) {
  let obj = {};
  let arr = [];
  for (let key in users) {
    if (users[key].name === name) {
      obj = users[key];
      arr.push(obj);
    }
  }
  return arr;
}

/**
 * @param {object[]} users
 * @param  {string} str
 * @return {object[]}
 */
function findUsersByString(users, str) {
  let arr = [];
  for (let key in users) {
    if (users[key].name.includes(str)) {
      arr.push(users[key]);
    }
  }
  return arr;
}

// examples
const users = [
  {
    id: 101,
    name: 'Denis',
    city: 'Kyiv',
  },
  {
    id: 102,
    name: 'Alexandr',
    city: 'Lviv',
  },
  {
    id: 103,
    name: 'Nastya',
    city: 'Kyiv',
  },
  {
    id: 104,
    name: 'Violetta',
    city: 'Odesa',
  },
  {
    id: 105,
    name: 'Mykola',
    city: 'Lviv',
  },
  {
    id: 106,
    name: 'Denis',
    city: 'Lviv',
  },
  {
    id: 107,
    name: 'Andrey',
    city: 'Odesa',
  },
  {
    id: 108,
    name: 'Alexey',
    city: 'Dnipro',
  },
];

let yura = 'Yura';
console.log(yura.includes('Yu'));

console.log(findUsersByName(users, 'Denis')); // ===> [ { id: 101, name: 'Denis', city: 'Kyiv' }, { id: 106, name: 'Denis', city: 'Lviv' } ]
console.log(findUsersByName(users, 'Andrey')); // ===> [ { id: 107, name: 'Andrey', city: 'Odesa' } ]
console.log(findUsersByName(users, 'Anna')); // ===> [ ]

console.log(findUsersByString(users, 'Al')); // ===> [ { id: 102, name: 'Alexandr', city: 'Lviv' }, { id: 108, name: 'Alexey', city: 'Dnipro' } ]
console.log(findUsersByString(users, 't')); // ===> [ { id: 103, name: 'Nastya', city: 'Kyiv' }, { id: 104, name: 'Violetta', city: 'Odesa' } ]
console.log(findUsersByString(users, 'Vik')); // ===> [ ]

console.log(findUsersByString(users, 'm')); // ===> [ ]
// explanation: letter 'm' is not included in any user name, 'Mykola' includes 'M' not 'm', so it is not added to the result
let fop = () => 'guid';

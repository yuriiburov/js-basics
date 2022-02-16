// function sum(from, to) {
//   let sum = 0;
//   for (let num = from; num <= to; num++) {
//     sum += num;
//   }
//   return sum;
// }

// function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
//   const firstIntervalSum = sum(firstFrom, firstTo);
//   const secondIntervalSum = sum(secondFrom, secondTo);

//   return firstIntervalSum > secondIntervalSum;
// }

// console.log(sum(2, 10));
// console.log(compareSums(1, 4, 4, 6));


// compare sums - refactoring

function sum(from, to) {
  let result = 0;
  for (let num = from; num <= to; num += 1) {
    result += num;
  }
  return result;
}

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  const firstIntervalSum = sum(firstFrom, firstTo);
  const secondIntervalSum = sum(secondFrom, secondTo);
  return firstIntervalSum > secondIntervalSum;
}
//First approach

let numbers = [2, 3, 6, 8, 9, 0, 90];
let arraySum = 0;

for (i = 0; i < numbers.length; i++) {
  arraySum = numbers[i] + arraySum;
}
console.log(arraySum);

//2nd approach

function getSumOfArray(numbers) {
  sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum = numbers[i] + sum;
  }
  return sum;
}
var answer = getSumOfArray([5, 6, 7]);
console.log(answer);

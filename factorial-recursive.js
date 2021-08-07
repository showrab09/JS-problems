function factorial(number) {
  if (number == 1) {
    return 1;
  }
  return number * factorial(number - 1);
}
var answer = factorial(5);
console.log(answer);

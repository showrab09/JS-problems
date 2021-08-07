// Swaping 2 numbers
//First approach
var number1 = 100;
var number2 = 200;
console.log(number1, number2);
var temp = number1;
number1 = number2;
number2 = temp;
console.log(number1, number2);

//2nd approach

var number1 = 100;
var number2 = 200;
console.log(number1, number2);

[number1, number2] = [number2, number1];
console.log(number1, number2);
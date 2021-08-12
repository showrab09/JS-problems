function sum(i) {
    if (i == 1){
        return 1;
    }
    return i + sum(i - 1);
}

//console.log(sum(10));

//Factorial using recursion

function factorial(num) {

    if (num == 1) {
        return 1;
    }
    return num * factorial(num - 1);
}
console.log(factorial(5));
//here we are returning a function from a function
function first() {
    store = 0;
    return function () {
        store++;
        return store;
    }
}
const firstfunc = first();
console.log(firstfunc());
console.log(firstfunc());
console.log(firstfunc());
console.log(firstfunc());
const secondfunc = first();
console.log(secondfunc());
console.log(secondfunc());
console.log(secondfunc());




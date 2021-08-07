const products = [
    { name: 'Shaban', price: 20, quantity: 3 },
    { name: 'Tel', price: 120, quantity: 3 },
    { name: 'Holud', price: 70, quantity: 2 },
    { name: 'Morich', price: 50, quantity: 6 },
    { name: 'Coke', price: 110, quantity: 1 }
]
var cartTotal = 0;

for (const product of products) {
    var productPrice = product.price * product.quantity;
    cartTotal = productPrice + cartTotal;
}
console.log(cartTotal);
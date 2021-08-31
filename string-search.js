const products = ['Green Laptop', 'Yellow laptop', 'Black Mobile PRO', 'Huawei h36 Drone','Hp Laptop pro','Iphone 12 pro'];
const search = 'Pro';
//indexof
const newArray = [];

// for (const product of products) {
//     if (product.toLowerCase().indexOf(search.toLowerCase()) != -1) {
//         newArray.push(product);
//     }
// }

//using Includes
for (const product of products) {
    if (product.toLowerCase().includes(search.toLowerCase())) {
        newArray.push(product);
    }
}
console.log(newArray);
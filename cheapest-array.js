function cheapestPhone(phones) {
  let cheapest = phones[0];
  for (const element of phones) {
    if (element.price < cheapest.price) {
      cheapest = element;
    }
  }
  return cheapest;
}

var answer = cheapestPhone([
  { name: "Iphone", price: 70000, storage: 8, camera: 10 },
  { name: "Xiaomi", price: 20000, storage: 8, camera: 10 },
  { name: "OnePlus", price: 35000, storage: 8, camera: 10 },
  { name: "Samsung", price: 2000, storage: 8, camera: 10 },
  { name: "Oppo", price: 7000, storage: 8, camera: 10 },
]);

console.log(answer);


//Problem 2
/* Finiding the total cost */
function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
  if (shirtQuantity >= 0 && pantQuantity >= 0 && shoeQuantity >= 0) {
    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;

    const totalPrice =
      shirtPrice * shirtQuantity +
      pantPrice * pantQuantity +
      shoePrice * shoeQuantity;
    return totalPrice;
  } else {
    /* If given input is negative or a string, then it will show error message */
    return "Please insert a positive number";
  }
}
const totalMoney = totalSales(1, 2,2);
console.log(totalMoney);

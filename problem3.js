//Problem 3
/* Finiding the total Delivery Cost */
function deliveryCost(shirtQty) {
    if (shirtQty >= 0) {
      /* Initializing first second and rest shirts price */
    const first100ShirtEachPrice = 100;
    const second100ShirtEachPrice = 80;
    const restShirtEachPrice = 50;
    if (shirtQty <= 100) {
      const totalPrice = shirtQty * first100ShirtEachPrice;
      return totalPrice;
    } else if (shirtQty <= 200) {
      const first100ShirtPrice = 100 * first100ShirtEachPrice;
      const restShirt = shirtQty - 100;
      const second100ShirtPrice = restShirt * second100ShirtEachPrice;
      const totalPrice = first100ShirtPrice + second100ShirtPrice;
      return totalPrice;
    } else {
      const first100ShirtPrice = 100 * first100ShirtEachPrice; 
      const second100ShirtPrice = 100 * second100ShirtEachPrice;
      const restShirt = shirtQty - 200;
      const restShirtPrice = restShirt * restShirtEachPrice;
      const totalPrice = first100ShirtPrice + second100ShirtPrice + restShirtPrice;
      return totalPrice;
    }
  } else {
        /* If given input is negative or a string, then it will show error message */
    return ("Please insert a Positive Number");
  }
}

const totalShippingCost = deliveryCost(800);
console.log(totalShippingCost);



function lowestArray(array) {
  var lowest = array[0];
  for (let i = 0; i < array.length; i++) {
    var element = array[i];
    if (lowest > element) {
      lowest = element;
    }
  }
  return lowest;
}

var answer = lowestArray([2, 3, 4, -3, 5, 6, 7, 8, 0]);
console.log(answer);

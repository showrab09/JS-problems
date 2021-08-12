//Problem 1
/* Seer To Mon Conversion */
function seerToMon(seer) {
  if (seer >= 0) {
    const mon = seer / 40;
    return mon;
  } else {
    /* If given input is negative or string, then it will show error message */
    return 'Please insert a positive number';
  }
}

const mon = seerToMon(400);
console.log(mon);

function leapYear(year) {
    if (year % 4 == 0) {
      return  console.log(year +" is a Leap Year");
    }
    else {
        return console.log(year +" is not a Leap Year");
    }
}

givenYear = 2018;
resultYear = leapYear(givenYear);
console.log(leapYear);
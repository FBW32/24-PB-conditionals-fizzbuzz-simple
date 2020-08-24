let myNum = 236;
if (myNum % 5 == 0 && myNum % 3 == 0) {
  console.log("FizzBuzz");
} else if (myNum % 5 == 0) {
  console.log("Buzz");
} else {
  if (myNum % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(myNum);
  }
}

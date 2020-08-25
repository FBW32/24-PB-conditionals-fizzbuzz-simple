// Programming Basics: Fizzbuzz (using simple if conditionals)

/* Let's play mini FizzBuzz! For any given number, if the number is:

    divisible by 3, print "Fizz".
    divisible by "5", print "Buzz".
    divisible by both 3 and 5, print "FizzBuzz".
*/
for (let num = 0; num <= 20; num++) {
    if (num % 3 == 0) {
      console.log("Fizz");
    } else if (num % 5 == 0) {
      console.log("Buzz");
    } else if (num % 3 == 0 && num % 5 == 0) {
      console.log("FizzBuzz");
    } else {
      console.log(num);
    }
  }
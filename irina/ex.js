// Programming Basics: Fizzbuzz (using simple if conditionals)
// Let's play mini FizzBuzz! For any given number, if the number is:

// divisible by 3, print "Fizz".
// divisible by "5", print "Buzz".
// divisible by both 3 and 5, print "FizzBuzz".
// That is, if any of the above conditions apply, print the above words instead of the number.
// Otherwise, just print the number.

let x = 15;
if (x % 3 === 0) {
    console.log("Fizz");


if (x % 5 === 0) {
    console.log("Buzz");


if ((x % 3 === 0) &&  (x % 5 === 0)) {
console.log("FizzBuzz");
}
}
} else {
    console.log(x);
} // Fizz, Buzz, FizzBuzz

x = 35;
if (x % 3 === 0) {
    console.log("Fizz");


if (x % 5 === 0) {
    console.log("Buzz");


if ((x % 3 === 0) &&  (x % 5 === 0)) {
console.log("FizzBuzz");
}
}
} else {
    console.log(x);
} //35


// # Programming Basics: Fizzbuzz (using simple if conditionals)

// Let's play mini FizzBuzz! For any given number, if the number is: 
// - divisible by 3, print "Fizz". 
// - divisible by "5", print "Buzz". 
// - divisible by both 3 and 5, print "FizzBuzz". 

let x = Math.floor(Math.random() * 100) + 0;

if (x % 3 === 0) {
    print1 = "Fizz";
}
else if (x % 5 === 0) {
    print1 = "Buzz";
}
else if ((x % 3 === 0) && (x % 5 === 0)) {
    print1 = "FizzBuzz";
}
else {
    print1 = x;
}
console.log(print1);
// randomised answer




// That is, if any of the above conditions apply, print the above words *instead of the number*.

// - Otherwise, just print the number.
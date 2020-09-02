// Programming Basics: Fizzbuzz (using simple if conditionals)
//Let's play mini FizzBuzz! For any given number, if the number is: 
//- divisible by 3, print "Fizz". 
//- divisible by "5", print "Buzz". 
//- divisible by both 3 and 5, print "FizzBuzz". 
//That is, if any of the above conditions apply, print the above words 


let numTst = 30;

if ((numTst % 3 === 0) && (numTst % 5 === 0)){
    console.log("FizzBuzz");
} else if (numTst % 3 === 0){
    console.log("fizz");
} else if(numTst % 5 === 0){
    console.log("Buzz");
} else{
    console.log(`the number ${numTst} is not divisible`);
}
//console.log(numTst);
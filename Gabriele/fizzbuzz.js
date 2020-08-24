 // Fizzbuzz


let givenNumber = 313;

if (givenNumber % 3 === 0) {
    console.log("Fizz");
} else if (givenNumber % 5 === 0) {
    console.log("Buzz");
} else if (givenNumber % 3 === 0 && givenNumber % 5 === 0) {
    console.log("FizzBuzz");
} else {console.log(givenNumber);}


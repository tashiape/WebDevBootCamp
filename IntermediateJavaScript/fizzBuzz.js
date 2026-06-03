//Coutn should start from 1.
//Count should be added to the end of the array.
//Count should be divisible by 3, then output Fizz.
//Divisible by 5, then output buzz.
//Divisible by both 3 and 5, then output FizzBuzz.


var output = [];
var count = 1;

function fizzBuzz() {

    if (count % 3 === 0 && count % 5 === 0) {
        output.push("FizzBuzz");
    } else if (count % 3 === 0) {
        output.push("Fizz");
    } else if (count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }
    count++;
    console.log(output);
}
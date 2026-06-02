//Write a program
//Whether a given year is a leap year or not
//Normal year: 365 days
//Leap year: 366 days, with an extra day in Feb
    //A year is a leap year if it is evenly divisible by 4 ;
    // except if that year is also evenly divisible by 100;
    // unless that year is also evenly divisible by 400.

function isLeap (year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "It's a leap year!";
            } else {
                return "Not a leap Year!";
            }
        } else {
            return "It's a leap year!";
        }
    } else {
        return "Not a leap year!";
    }
}

isLeap();

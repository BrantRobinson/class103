

// Challenge #1
let radius = 3;
const pi = 3.14;
let area = pi * radius ** 2;

let message = `The area of a circle with radius ${radius} cm is ${area} cm^2`;
console.log(message);



// Challenge #2
let integerNumber = 1625;

console.log("The value of integerNumber is: " + integerNumber);
integerNumber = 375;
let addNumber = 125;
let total = integerNumber + addNumber;
console.log(integerNumber + " + " + addNumber + " = " + total);


let aVariable = 20;
let otherVariable = 30;
console.log (aVariable, otherVariable);
aVariable = 50;
otherVariable = 100;
console.log(aVariable, otherVariable);

const weekDays = 7;
console.log(weekDays);

// weekDays = 10;
console.log(weekDays);

//Challenge #3
const daysInWeek = 7;

let vacationDays = 21;
calculateTotal(vacationDays);
vacationDays = 28;
calculateTotal(vacationDays);

function calculateTotal(vacation) {
    let totalDays = vacation + daysInWeek;
    console.log(`One week plus my vacation days equals ${totalDays} days in total`);
}




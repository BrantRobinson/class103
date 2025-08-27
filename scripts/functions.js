// // console.log("What's your (dis)function?");

// //1. create the function
// function sayHello () {
//     console.log(`Hello Brant`);
// }


// //2. Call the function

// sayHello();


// //example #2 with 1 parameter (input)

// function greet(name) {
//     console.log(`Hello ${name}`);
// }

// greet("Cohort 61");
// greet("Dr. Jimenez");

// //example 3 with 2 parameters

// function greet2(fname, lname) {
//     console.log(`Welcome to the system ${fname} ${lname}`);
// }

// greet2("Brant", "Robinson");
// greet2("Micah", "Weathers");

// challenge 1
// function doubleNumber (number) {
//     let total = number * 2;
//     console.log(`The number ${number} doubled is ${total}`);
// }

// doubleNumber(2);
// doubleNumber(.6786);
// doubleNumber(106.8);


//example #4 with the prompt
function welcome () {
    let message = "";
    let name = prompt("Enter your first name");
    name === "" ? message = "You didn't enter a name" : message = `Welcome ${name}`;
    console.log(message);
}

//example 5 with default parameter

function add(num1=0, num2=0) {
    num1 = prompt("Enter first Number:");
    num2 = prompt("Enter second Number:");
    let total = Number(num1) + Number(num2);
    console.log(`${num1} + ${num2} = ${total}`);
}



// challenge #2
function combineNames (fname="Unknown", lname="Unknown") {
    console.log(`${fname} ${lname}`);
}
combineNames("Brant", "Robinson");
combineNames("Brant");
combineNames();

//challenge #3
function convertToSeconds() {
    let message = "";
    let minutes = prompt("Enter a number of minutes:");
    minutes = Number(minutes);  

    if (isNaN(minutes)) {
        message = "You didn't enter a number";
    } else {
        let seconds = minutes * 60;
        let verMin = minutes === 1 ? "minute" : "minutes";
        message = `${minutes} ${verMin} is ${seconds} seconds`;
    }

  document.getElementById("js-display-conversion").innerHTML += `<li class = "conv"> ${message} </li>`;
}

// cl("if-statement");

// let result = 30;

// if (result > 40) {
//     cl("you passed the exam!");
// }

// let result1 = 45;
// let result2 = 45;

// if (result1 === result2) {
//     cl("they are the same");
// } else {
//     cl("They are not the same");
// }

// result > 40 ? cl("You passed") : cl("You did NOT pass!");

// let waterTemperature = 10;

// waterTemperature >= 100 ? cl("water is boiling") : cl("water is NOT boiling");


function ageCalculator () {
    let age = prompt("Enter the age: ")

    if (age < 13) {
        cl("You are a child");
    } else if (age <20) {
        cl("you are a teenager");
    } else if (age <64) {
        cl("You are an adult");
    } else if (age >150) {
        cl("You are dead");
    } else {
        cl("You are a senior");
    }
     
}

function trafficLight () {
    let color = prompt("enter light color (green, yellow, or red)").toLowerCase();
    if (color == "green") {
        cl("GO!");
    } else if (color == "yellow") {
        cl("Slow Down!")
    } else if (color == "red") {
        cl("STOP!");
    } else {
        cl("you didn't enter green, yellow or red");
    }
}

function ticketPrice () {
    let age = prompt("Enter your age: ");
    let cost = 10;

    if (isNaN(age)) {
        cl("You didn't enter an age - learn to follow directions!");
        document.getElementById("js-display").innerHTML = "You didn't enter an age - learn to follow directions!";
        return;
    } else if (age < 12) {
        cost = 5;
    } else if (age < 18) {
        cost = 8;
    }
    cl(`Your ticket price is: $${cost}`);
    document.getElementById("js-display").innerHTML = `Your ticket price is: $${cost}`;
}

function weather () {
    let outfit = "t-shirt";
    let temp = prompt("Enter the temperature in C");
    let display = document.getElementById("js-display");
    display.className = "output-display";

    if (isNaN(temp)) {
        display.innerHTML = `You didn't enter a temperature`;
        return;
    } else if (temp < 15) {
        outfit = "jacket";
        display.classList.add("cold");
    } else if (temp < 25) {
        outfit = "sweater";
        display.classList.add("normal");
    } else if (temp < 43) {
        outfit = "t-shirt";
        display.classList.add("hot");
    } else {
        outfit = "birthday suit or else you might die!";
        display.classList.add("hotter");
    }

    display.innerHTML = `It's ${temp}&degC outside.  You should wear a ${outfit}`;

}

function game () {
    let action = prompt("Choose and action: Jump (J) or Run (R)").toUpperCase();
    let display = document.getElementById("js-display");
    let message = "";

    switch(action){
        case "J":
            message = "you jumped";
            break;
        case "R":
            message = "You are running";
            break;
        default:
            message = "unknown action";
            break;
    }
    display.innerHTML = message;
}

function cl (input) {
    console.log(input);
}
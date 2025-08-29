let button = document.querySelector(".btn");
let radios = document.querySelectorAll('input[name="units"]');

radios.forEach(radio => {
    radio.addEventListener("change", updateButtonLabel)
});

updateButtonLabel();

function updateButtonLabel() {
    
    let selectedUnit = document.querySelector('input[name="units"]:checked');

    if (selectedUnit.value === "celsius") {
        button.textContent = "Convert to Fahrenheit";
    } else {
        button.textContent = "Convert to Celsius";
    }
}

function convertTemp () {
    let tempInput = document.getElementById("temp").value;
    let convertedTemp;
    let selectedUnit = document.querySelector('input[name="units"]:checked');
    let unselectedUnit;

    if (selectedUnit.value === "celsius") {
        convertedTemp = (tempInput * 9 / 5) + 32;
        unselectedUnit = "F";
        selectedUnitDisplay = "C";
    } else {
        convertedTemp = (tempInput - 32) * 5 / 9;
        unselectedUnit = "C";
        selectedUnitDisplay = "F";
    }

    
    updateMercuryDisplay(convertedTemp, unselectedUnit, tempInput);
    convertedTemp = Math.round(convertedTemp * 100) / 100;
    document.querySelector(".display-results").innerHTML = `${tempInput}&deg${selectedUnitDisplay} = ${convertedTemp}&deg${unselectedUnit}`;
}

function updateMercuryDisplay (temp, units, tempInput) {
    let heightM = 0;
    let mercury = document.querySelector(".mercury");
    temp = (units === "F") ? temp : tempInput;
    if (temp >=0) {
        heightM = Number(temp) + 60;
    } else {
        heightM = 60 - (Math.abs(temp)); 
    }
    mercury.style.height = heightM + "px";

    // change background color
    let backgroundcolor = document.querySelector("header");
    if (temp <=50) {
        backgroundcolor.style.backgroundColor = "blue";
        backgroundcolor.style.color = "white";
    } else if (temp <= 70) {
        backgroundcolor.style.backgroundColor = "yellow";
        backgroundcolor.style.color = "black";
    } else if (temp <= 100) {
        backgroundcolor.style.backgroundColor = "orange";
        backgroundcolor.style.color = "black";
    } else {
        backgroundcolor.style.backgroundColor = "red";
        backgroundcolor.style.color = "white";
    }
}
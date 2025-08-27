function convertCToF () {
    let temperature = prompt("Enter a Temperature in Celsius");
    let fahrenheit = (temperature * 9 / 5) + 32;
    document.getElementById('js-display-conversion').innerHTML = `${temperature}&degC is ${fahrenheit}&degF`;
}
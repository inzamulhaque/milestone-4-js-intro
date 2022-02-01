function getCelsius(fahrenheit) {
    let calcCelsius = (fahrenheit - 32) * 5 / 9;
    calcCelsius = Math.round(calcCelsius);
    return calcCelsius;
}

const celsius = getCelsius(35.6);
console.log(celsius);
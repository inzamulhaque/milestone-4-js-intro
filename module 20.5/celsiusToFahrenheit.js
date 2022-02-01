function getFahrenheit(celsius) {
    let calcFahr = (celsius * 9 / 5) + 32;
    return calcFahr;
}

const fahr = getFahrenheit(1);
console.log(fahr);
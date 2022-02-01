function getFactorial(num) {
    let factorialNum = 1;
    let i = 1;
    while (i <= num) {
        factorialNum = factorialNum * i;
        i++;
    }
    return factorialNum;
}

const factorial = getFactorial(5);
console.log(`normal factorial: ${factorial}`);

function getFact(num) {
    let fact = 1;
    let i = num;
    while (i >= 1) {
        fact = fact * i;
        i--;
    }
    return fact;
}

const factorial2 = getFact(7);
console.log(factorial2);


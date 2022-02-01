function factorial(number) {
    let initFact = 1;

    for (let i = 1; i <= number; i++) {
        initFact = initFact * i;
    }

    return initFact;
}

var fact = factorial(7);
console.log(fact);
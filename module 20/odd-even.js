function oddEven(number) {
    if (number % 2 == 0) {
        const result = "even";
        return result;
    } else {
        const result = "odd";
        return result;
    }
}

const checkNumber = oddEven(12753);
console.log(checkNumber);
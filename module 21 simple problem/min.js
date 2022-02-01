function getMinNumber(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        return "Number1";
    } else if (num2 < num1 && num2 < num3) {
        return "Number2";
    } else if (num3 < num1 && num3 < num2) {
        return "Number3";
    } else {
        return "some number";
    }
}

console.log(getMinNumber(3, 5, 7));
// function getMaxNumber(num1, num2) {
//     if (num1 > num2) {
//         return "number1";
//     } else if (num1 < num2) {
//         return "number2";
//     } else {
//         return "some number";
//     }
// }

// console.log(getMaxNumber(7, 7));

function getMaxNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return "number1";
    } else if (num1 < num2 && num3 < num2) {
        return "number2";
    } else if (num3 > num1 && num2 < num3) {
        return "number3";
    } else {
        return "some number";
    }
}

console.log(getMaxNumber(1, 3, 5));
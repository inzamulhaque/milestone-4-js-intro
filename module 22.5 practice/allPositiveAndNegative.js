const array = [3, 1, 5, 9, 7, 19, 23, 25, 0, -1, -3, 7, -7, 8, 37];

function checkNumber(arr) {
    const positiveNumber = [];
    const negativeNumber = [];
    for (const element of arr) {
        if (element >= 0) {
            positiveNumber.push(element);
        }
        if (element < 0) {
            negativeNumber.push(element);
        }
    }
    console.log(positiveNumber);
    console.log(negativeNumber);
}

checkNumber(array);
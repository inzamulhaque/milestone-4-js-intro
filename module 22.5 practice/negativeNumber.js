const array = [3, 1, 5, 9, 7, 19, 23, 25, 0, -1, -3, 7, -7, 8, 37];

function getPositiveNumber(arr) {
    const positiveArr = [];
    for (const element of arr) {
        if (element < 0) {
            return positiveArr;
        } else {
            positiveArr.push(element);
        }
    }
    return positiveArr;
}

console.log(getPositiveNumber(array));
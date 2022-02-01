function getSecondMax(arr) {
    let sortArr = arr.sort(function (a, b) { return a - b });
    const secondMaxIndex = arr.length - 2;
    console.log(sortArr);
    return sortArr[secondMaxIndex];
}

const array = [15, 2, 6, 1, 8, 4, 3, 17, 96, 34, 54, 13, 5, 67];
console.log(getSecondMax(array));
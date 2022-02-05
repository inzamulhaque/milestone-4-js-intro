function secoundLargest(array) {
    if (Array.isArray(array) == false) {
        return "please enter array";
    }

    if (array.length <= 0) {
        return "please don't give me empty array";
    }

    array.sort((a, b) => a - b);
    const myArr = [];
    let secondLargestIndex;

    for (const element of array) {
        if (myArr.indexOf(element) == -1) {
            myArr.push(element);
        }
        secondLargestIndex = myArr.length - 2;
    }

    return myArr[secondLargestIndex];
}

const array = [3, 4, 5, 7, 6, 8, 9, 10, 10, 9, 11, 13, 13, 11, 13, 11];

const result = secoundLargest(array);

console.log(result);
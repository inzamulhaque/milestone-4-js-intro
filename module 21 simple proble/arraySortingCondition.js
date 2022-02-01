let myArray = [3, 1, 5, 10, 110, 101, 45, 75, 34, 31, 23, 47, 99];
let i = 0;
let j = 1;

let sortArr = [];

function isArraysorting(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            return false;
        }

    }

    return true;
}

function sortingArray(array) {
    if (isArraysorting(array)) {
        sortArr = array;
        console.log("check");
        return sortArr;
    } else if (array[i] < array[j]) {
        i++;
        j++;
        sortingArray(array);
    } else {
        [array[i], array[j]] = [array[j], array[i]]
        i = 0;
        j = 1;
        sortingArray(array);
    }
}

// console.log(isArraysorting(myArray));
console.log(sortingArray(myArray));
console.log(sortArr);
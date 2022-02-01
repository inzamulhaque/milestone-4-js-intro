function maxNumberOfArr(arr) {
    let max = arr[0];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (element > max) {
            max = element;
        }

    }

    return max;
}

const arr = [3, 5, 1, 9, 7, 15, 19, 21, 17, 23];
console.log(maxNumberOfArr(arr));
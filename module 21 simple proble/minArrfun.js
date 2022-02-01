function minNumberOfArr(arr) {
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (min > element) {
            min = element;
        }
    }
    return min;
}

const arr = [35, 51, 10, 9, 7, 15, 19, 21, 17, 23];
console.log(minNumberOfArr(arr));
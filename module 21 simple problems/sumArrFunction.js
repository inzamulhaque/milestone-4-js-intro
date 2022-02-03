function sumOfArr(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        count += element;
    }
    return count;
}

let sum = sumOfArr([3, 5, 9]);

console.log(sum);
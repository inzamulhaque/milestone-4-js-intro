const arr = [11, 7, 13, 15, 17, 9, 5, 19, 101, 3];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (max < element) {
        max = element;
    }
}

console.log(max);
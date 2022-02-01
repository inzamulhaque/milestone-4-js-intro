function getAvaArr(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        count += element;
    }

    return count / arr.length;
}

let arr = [1, 5, 9, 5, 7];
console.log(getAvaArr(arr));
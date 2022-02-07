function stringToArray(string) {
    const arr = [];
    if (typeof string != "string") {
        return "please give me string";
    }
    for (let i = 0; i < string.length; i++) {
        arr[i] = string[i];
    }

    return arr;

}

const string = "string";
console.log(string);
console.log(stringToArray(string));
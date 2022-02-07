function reverseString(string) {
    let newString = string.split("").reverse().join("");
    if (string.length <= 1) {
        return "please give me valid string"
    }

    if (newString == string) {
        return "lucky string";
    } else {
        return "normal string";
    }
}

console.log(reverseString("normal string"));
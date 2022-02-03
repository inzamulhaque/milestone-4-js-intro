const greeting = "Hello, how are you?";

function reverseString(text) {
    let newStr = "";

    for (const letter of text) {
        console.log(letter);
        newStr = letter + newStr;
    }
    return newStr;
}

const reverse = reverseString(greeting);

console.log(reverse);
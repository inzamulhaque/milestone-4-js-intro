// const string = "The quick brown fox jumps over the lazy dog";

// function checkVowels(str) {
//     let count = 0;
//     for (const letter of str) {
//         if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(checkVowels(string.toLocaleLowerCase()));

const string = "The quick brown fox jumps over the lazy dog";

function checkVowels(str) {
    const vowels = ["a", "e", "i", "o", "u"]
    let count = 0;
    for (const letter of str) {
        for (const vowel of vowels) {
            if (letter == vowel) {
                count++;
            }
        }
    }

    return count;
}

console.log(checkVowels(string.toLocaleLowerCase()));
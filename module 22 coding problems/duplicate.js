const names = ["alif", "karia", "hridoy", "ahad", "karia", "sazid", "sajjat", "hridoy", "ahad", "moon", "shohag", "alif", "billal"];

function removeDuplicate(names) {
    const unique = [];

    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }

    return unique;
}

console.log(removeDuplicate(names));
console.log(names);
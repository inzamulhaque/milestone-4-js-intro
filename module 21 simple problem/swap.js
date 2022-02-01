let first = 5;
let second = 7;
console.log(first, second);

// normal
let temp = first;
first = second;
second = temp;
console.log(first, second);

// ES
[first, second] = [second, first];
console.log(first, second);
function sum(i) {
    if (i == 1) {
        return 1;
    }

    return i + sum(--i);
}

// console.log(sum(5));


function add(i) {
    if (i == 1) {
        return 1;
    }

    const sum = i + add(--i);

    return sum;
}

console.log(add(5));
function factorial(i) {
    if (i == 1) {
        return 1;
    }

    if (i <= 0) {
        return 0;
    }

    return i * factorial(--i);
}

console.log(factorial(10));
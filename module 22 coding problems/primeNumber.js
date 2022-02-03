function itPrimeNumber(num) {
    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        return `${num} is a prime number`;
    } else {
        return `${num} is not a prime number`;
    }
}

console.log(itPrimeNumber(19));
function table(num) {
    if (typeof num != "number") {
        return "please enter number";
    }

    if (num <= 0) {
        return "please enter valid number";
    }

    for (let i = 1; i <= 10; i++) {
        const result = num * i;
        console.log(`${num} X ${i} = ${result}`);
    }
}

table(3);
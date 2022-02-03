function foobar(num) {
    let y = [];
    for (let i = 1; i <= num; i++) {
        y = i;
        if (y % 3 === 0 && y % 5 === 0) {
            y = "foobar"
        } else if (y % 3 === 0) {
            y = "foo";
        } else if (y % 5 === 0) {
            y = "bar";
        }
        console.log(y);
    }
}

foobar(50);
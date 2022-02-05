const string = "bAngLAdesh";

function uppOrLow(str) {
    let uppCount = 0, lowCount = 0, notStr = 0;
    for (const element of str) {
        if (element == element.toUpperCase()) {
            uppCount++;
        } else if (element == element.toLowerCase()) {
            lowCount++;
        } else {
            notStr++;
        }
    }

    if (uppCount > lowCount) {
        return str.toUpperCase();
    } else if (lowCount > uppCount) {
        return str.toLowerCase();
    } else {
        return str;
    }
}

console.log(uppOrLow(string));
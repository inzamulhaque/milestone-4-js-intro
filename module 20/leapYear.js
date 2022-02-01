function leapYear(year) {
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        return true;
    } else {
        return false;
    }
}

const checkYear = leapYear(2023);
console.log(checkYear);
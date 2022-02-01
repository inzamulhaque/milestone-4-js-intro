function moon(time) {
    if (time >= 19 || time <= 5) {
        return "MOON UP";
    } else {
        return "MOON DOWN";
    }
}

const result = moon(19);
console.log(result);
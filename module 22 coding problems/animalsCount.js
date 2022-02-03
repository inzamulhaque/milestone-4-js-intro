function animalsCount(miles) {
    let count = 0;
    if (miles <= 10 && miles > 0) {
        count = miles * 10;
    } else if (miles <= 20 && miles > 0) {
        let miles10 = 10 * 10;
        let thisMiles = miles - 10;
        let anim = thisMiles * 20;
        count = miles10 + anim;
    } else if (miles > 20 && miles > 0) {
        let miles10 = 10 * 10;
        let miles20 = 10 * 20;
        let thisMiles = miles - 20;
        let anim = thisMiles * 50;
        count = miles10 + miles20 + anim;
    } else {
        return "plz enter valid miles in number"
    }

    return count;
}

const animals = animalsCount(23);
console.log(animals);
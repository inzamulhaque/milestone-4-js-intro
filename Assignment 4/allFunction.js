// corvert gold weight ana to vori
function anaToVori(ana) {
    if (typeof ana != "number") {
        return "we just accept numbers. so enter your gold weight in number.";
    }

    if (ana < 0) {
        return "please enter valid gold weight.";
    }
    const vori = ana / 16;
    return vori;
}

// const result = anaToVori(48);

// calculate total food price
function pandaCost(singaraQty, samosaQty, jalebiQty) {
    const price = {
        singara: 7,
        samosa: 10,
        jalebi: 15
    };

    // for check quantity is greater than zero or not
    const totalQty = singaraQty + samosaQty + jalebiQty;

    if (typeof singaraQty != "number" || typeof samosaQty != "number" || typeof jalebiQty != "number") {
        return "we just accept numbers. so enter your food quantity in number.";
    }

    if (singaraQty < 0 || samosaQty < 0 || jalebiQty < 0) {
        return "negative value not accepted";
    }

    if (totalQty <= 0) {
        return "please order minimum one food";
    }

    const totalSingaraPrice = price.singara * singaraQty;
    const totalSamosaPrice = price.samosa * samosaQty;
    const totalJalebiPrice = price.jalebi * jalebiQty;

    const total = totalSingaraPrice + totalSamosaPrice + totalJalebiPrice;
    return total;
}

// const result = pandaCost(3, 5, 1);

// budgeting for picnic
function picnicBudget(numberOfMan) {
    if (typeof numberOfMan != "number") {
        return "please enter number of man";
    }

    if (numberOfMan <= 0) {
        return "please enter minimum one number";
    }

    // defined variable for using under condition
    let totalCost;

    if (numberOfMan <= 100) {
        totalCost = numberOfMan * 5000;
    } else if (numberOfMan > 100 && numberOfMan <= 200) {
        const firstOneHundredCost = 100 * 5000;
        const restMan = numberOfMan - 100;
        const restManCost = restMan * 4000;
        totalCost = firstOneHundredCost + restManCost;
    } else {
        const firstOneHundredCost = 100 * 5000;
        const secondOneHundredCost = 100 * 4000;
        const restMan = numberOfMan - 200;
        const restManCost = restMan * 3000;
        totalCost = firstOneHundredCost + secondOneHundredCost + restManCost;
    }

    return totalCost;
}

const result = picnicBudget(299);

// odd friend
function oddFriend(array) {
    if (Array.isArray(array) == false) {
        return "please give me array";
    }

    if (array.length <= 0) {
        return "please don't give me empty array";
    }

    for (const element of array) {
        if (element.length % 2 != 0) {
            return element;
        }
    }

    return "I've no odd friend";

}

const friendsName = ["MD IH Alif", "MD Karia", "MD MH Hridoy", "Ahad", "Roman", "Alif"];

// const result = oddFriend(friendsName);

console.log(result);
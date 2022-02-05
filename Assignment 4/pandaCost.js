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

const result = pandaCost(3, 3, 3);
console.log(result);
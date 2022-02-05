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

const result = picnicBudget(30);

console.log(result);
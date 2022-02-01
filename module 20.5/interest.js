// pv = present value
// fv = future value
// i = interest rate
// n = number of year
// fv = pv * (1 + i)^n

function getInterest(pv, i, n) {
    let iRate = i / 100;
    let interestRate = 1 + iRate;
    let interestTime = Math.pow(interestRate, n);
    let fv = pv * interestTime;
    fv = Math.round(fv);
    return fv;
}

const interest = getInterest(100, 10, 5);

console.log(interest);
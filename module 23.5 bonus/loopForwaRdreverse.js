// for (let i = 1; i <= 5; ++i) {
//     console.log(i);
// }

// function myFun(i) {
//     console.log(++i);
//     myFun(i);
// }

// myFun(1);


// recursion function
function myFun(i) {
    if (i >= 5) {
        return i;
    }
    console.log(++i);
    return myFun(i);
}


console.log(myFun(1));



// function myFun2(i) {
//     i++;
//     return i;
// }

// console.log(myFun2(2));

// https://stackoverflow.com/questions/12737970/recursive-function-returns-undefined
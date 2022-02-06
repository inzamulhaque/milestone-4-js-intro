// recursion function
function myFun(i) {
    if (i >= 5) {
        return i;
    }
    console.log(i++);
    return myFun(i);
}


console.log(myFun(1));

console.log("123" + 123);



// function myFun2(i) {
//     i++;
//     return i;
// }

// console.log(myFun2(2));
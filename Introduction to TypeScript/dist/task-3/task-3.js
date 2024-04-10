"use strict";
function sumOfNumbers(a1, a2) {
    const a1ParstAsNum = parseInt(a1);
    const a2ParstAsNum = parseInt(a2);
    let result = 0;
    for (let index = a1ParstAsNum; index <= a2ParstAsNum; index++) {
        result += index;
    }
    return result;
}
console.log(sumOfNumbers('1', '5'));
console.log(sumOfNumbers('-8', '20'));

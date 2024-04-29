function printAndSum(startNumber, endNumber) {
    let sum = 0;
    let arrayOfNums = [];
    for (let index = startNumber; index <= endNumber; index++) {
        sum += index;
        arrayOfNums.push(index);
    }
    return `${arrayOfNums.join(" ")}\nSum: ${sum}`;
}
const result1 = printAndSum(5, 10);
console.log(result1);
const result2 = printAndSum(0, 26);
console.log(result2);
const result3 = printAndSum(50, 60);
console.log(result3);
//# sourceMappingURL=printAndSum.js.map
function largestNum(num1: number, num2: number, num3: number): string {
    let largestNum: number | undefined;
    if (num1 > num2 && num1 > num3) {
        largestNum = num1
    }
    if (num2 > num1 && num2 > num3) {
        largestNum = num2
    }
    if (num3 > num1 && num3 > num2) {
        largestNum = num3
    }
    return `The largest number is ${largestNum}.`
}

console.log(largestNum(5, -3, 16));
console.log(largestNum(-3, -5, -22.5));

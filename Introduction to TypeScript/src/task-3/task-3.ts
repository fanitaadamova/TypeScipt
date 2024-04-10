function sumOfNumbers(a1: string, a2: string) {
    const a1ParstAsNum: number = parseInt(a1);
    const a2ParstAsNum: number = parseInt(a2);

    let result: number = 0;

    for (let index = a1ParstAsNum; index <= a2ParstAsNum; index++) {
        result += index;
    }

    return result;
}

console.log(sumOfNumbers('1', '5') );
console.log(sumOfNumbers('-8', '20'));


function biggerHalf(arrayInput: number[]): number[] {

    let numOfHalf = arrayInput.length / 2;
    arrayInput.sort(function (a, b) { return a - b });

    return arrayInput.splice(numOfHalf);

}
console.log(biggerHalf([4, 7, 2, 5]));
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));

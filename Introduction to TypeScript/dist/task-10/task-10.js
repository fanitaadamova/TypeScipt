"use strict";
function aggregateElements(arrayofNumbers) {
    const sum = arrayofNumbers.reduce((accumulator, currentValue) => accumulator + currentValue);
    const inverse = arrayofNumbers.reduce((accumulator, currentValue) => accumulator + 1 / currentValue);
    const concatenates = arrayofNumbers.join('');
    console.log(sum);
    console.log(inverse);
    console.log(concatenates);
}
aggregateElements([1, 2, 3]);

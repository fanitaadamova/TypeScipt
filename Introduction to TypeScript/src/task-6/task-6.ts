function evenPosition(arrayInput: string[]): string {
    let evenPosition: string[] = [];

    arrayInput.forEach((elem) => {
        let index = arrayInput.indexOf(elem);

        if (index % 2 === 0) {
            evenPosition.push(elem);
        }
    })

    return evenPosition.join(' ');

}

console.log(evenPosition(['20', '30', '40', '50', '60']));
console.log(evenPosition(['5', '10']));

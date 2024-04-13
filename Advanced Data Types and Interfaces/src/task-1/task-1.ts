function calorieObject(inputArray: Array<string>) {
    let object: Object = {};

    let keyOfObj: string = '';
    let valueOfObj: number | null = null;

    inputArray.forEach(element => {
        if (inputArray.indexOf(element) % 2 === 0) {
            keyOfObj = element;
        } else {
            valueOfObj = parseInt(element);
            object[keyOfObj] = valueOfObj;

            keyOfObj = '';
            valueOfObj = null;
        }

    });

    return object;

}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));

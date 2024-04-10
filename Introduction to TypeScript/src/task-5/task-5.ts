function mathOperations(x: number, y: number, operation: string) {

    switch (operation) {
        case '+':
            return x + y;
            break;
        case '-':
            return x - y;
            break;
        case '*':
            return x * y;
            break;
        case '/':
            return x / y;
            break;
        case '%':
            return x % y;
            break;
        case '**':
            return x ** y;
            break;
    }

}

console.log(mathOperations(5, 6, '+'));
console.log(mathOperations(3, 5.5, '*'));
console.log(mathOperations(3, 5.5, '**'));
console.log(mathOperations(3, 5.5, '%'));


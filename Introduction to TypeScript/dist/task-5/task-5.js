"use strict";
function mathOperations(x, y, operation) {
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

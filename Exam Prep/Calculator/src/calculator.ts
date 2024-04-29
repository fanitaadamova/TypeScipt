//Да проверя какво връщам

function calculator(num1: number, operator: string, num2: number): number{
    let result = null;

    switch (operator) {
        case '+':
            result = (num1 + num2);
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
         console.log("Invalid operator!");
            break;

    }

    if (result !== null) {
        result = result.toFixed(2);
    }

    return result;
}
const result = calculator(5, "*", 10)
console.log(result);

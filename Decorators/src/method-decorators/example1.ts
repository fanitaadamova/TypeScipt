class Salary {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    @withExtraMoney(20)
    getSalaryTotal() {
        console.log( `${this.name} wiil give toral (salary with extra money) ${(this.salary).toFixed(2)} this month!`);
       
    }
}

const employee = new Salary("Peter", 4000);
console.log(employee);
employee.getSalaryTotal();


type WithExtraMoney = {
    salary: number;
};

//using closure
// DECORATOR's scope
function withExtraMoney<T extends WithExtraMoney>(money: number) {
    // Connect between CLASS and FUNCTION
    return function (target: Function, context: ClassMethodDecoratorContext) {
        // FUNCTION's scope => fixBugInProduction/writeTest
        return function (...args: any) {
            const instance = this as T; // T -> our decorate class

            if (instance.salary > money) {
                instance.salary += money;
                target.apply(instance, args); // calls our method
            } else {
                
            }
        };
    };
}
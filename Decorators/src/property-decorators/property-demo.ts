//field
type TaskType = {
    name: string;
    level: "low" | "medium" | "hard";
};

class Employee {
    @withMoreTasksDefine
    tasks: TaskType[] = [];
}

const employee1 = new Employee();
console.log(employee1);

const employee2 = new Employee();
console.log(employee2);

// Decorator scope
function withMoreTasksDefine<T, V extends TaskType[]>(
    //target не ни трябва тук
    target: undefined,
    context: ClassFieldDecoratorContext
) {
    // Property scope
    return function (fieldValue: V) {
        // API call -> async
        fieldValue.push({ name: "Do your homework!", level: "medium" });
        fieldValue.push({ name: "Go to work!", level: "low" });
        fieldValue.push({ name: "Go to the GYM!", level: "hard" });
        fieldValue.push({ name: "Go to the GYM!", level: "hard" });

        return fieldValue;
    };
}
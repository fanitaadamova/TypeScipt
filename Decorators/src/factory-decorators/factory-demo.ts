type Level = "low" | "medium" | "hard";

interface Task3 {
  nameOfTask: string;
  levelOfTask: Level;
}

class Employee1 {
  @withTaskAdd({ nameOfTask: "Task - 1", levelOfTask: "hard" })
  tasks: Task[] = [];

  @withComplicatedTaskAdd()
  extraTasks: Task[] = [];
}
const employee3 = new Employee1();
console.log(employee3);

// Decorator's scope
function withTaskAdd(inputTask: Task3) {
  // Filed's scp[e]
  return function <T, V extends Task[]>(
    target: undefined,
    context: ClassFieldDecoratorContext
  ) {
    return function (fieldValue: V) {
      fieldValue.push(inputTask);
      return fieldValue;
    };
  };
}

function withComplicatedTaskAdd() {
  // logic
  // based on input -> different decorators can be returned
  return withTaskAdd({ nameOfTask: "Task - 0", levelOfTask: "medium" });
}
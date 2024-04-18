/// <reference path = "greater.ts" />
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduction() {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }
    sayGoodbye(name) {
        return `Dear ${name}, it was a pleasure meeting you!`;
    }
}
let person = new Person('Ivan Ivanov', 25);
console.log(person.introduction());
console.log(person.sayGoodbye('Petar Petrov'));
//# sourceMappingURL=task-1.js.map
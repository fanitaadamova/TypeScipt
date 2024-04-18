/// <reference path = "greater.ts" />

class Person implements Greeter.Greeting<string> {
    private name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    introduction(): string {
        return `My name is ${this.name} and I am ${this.age} years old.`
    }

    sayGoodbye(name: string): string {
        return `Dear ${name}, it was a pleasure meeting you!`
    }
}

let person = new Person('Ivan Ivanov', 25);

console.log(person.introduction());
console.log(person.sayGoodbye('Petar Petrov'));

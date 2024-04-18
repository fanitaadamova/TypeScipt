class Person2 {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPersonData() {
        return `${this.name} is ${this.age} years old.`;
    }
}
const person2 = new Person2("Peter", 12);
console.log(person2.getPersonData());
const person3 = new Person2("Sofia", 33);
console.log(person3.getPersonData());
//# sourceMappingURL=task-2.js.map
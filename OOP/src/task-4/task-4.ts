// Create three classes named Animal, Dog, and Cat. 
// •	Animal with a single public method eat() that prints: "eating…"
// •	Dog with a single public method bark() that prints: "barking…"
// •	Cat with a single public method meow() that prints: "meowing…"
// •	Dog and Cat should inherit from Animal.

class Animal1 {
    eat() {
        console.log("eating…");
    }
}

class Dog1 extends Animal1 {
    bark() {
        console.log("barking…");
    }

}

class Cat1 extends Animal1 {
    meow() {
        console.log("meowing…");
    }

}

const dogtest = new Dog1();
const cattest = new Cat1();
dogtest.bark();
cattest.meow()
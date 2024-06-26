// Create a namespace Greeter, that exports a generic interface Greeting. 
// The interface must support the following two declarations:
// ·	introduction()
// ·	sayGoodbye(name) – the name is of the generic type

// In a new file create class Person which implements the Greeter interface and receives two private properties from the constructor: name (a string) and age (a number) and add the following logic to the methods:
// ·	introduction() – returns a string in the following format: "My name is {name} and I am {age} years old."
// ·	sayGoodbye(name) – returns a string in the following format: "Dear {name}, it was a pleasure meeting you!"



namespace Greeter {
    export interface Greeting<T> {
        introduction(): void;
        sayGoodbye(name: T): void;
    }
}
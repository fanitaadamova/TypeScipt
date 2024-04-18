// Create a generic class Box that takes one property from the constructor.This property must be initialized with
//  generic type.Create a toString() method that returns a message in the following format: "{data} is of type {type}".

class Box<T>{
    data: T;
    constructor(data: T) {
        this.data = data;
    }

    toString() {
        return `${this.data} is of type ${typeof this.data}`
    }
}

let box1 = new Box(['test']);
let box2 = new Box(20);
let box3 = new Box('Hello');

console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());

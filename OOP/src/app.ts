// // PROCEDURAL PROGRAMMING
// let baseSalary = 30000;
// const overtime = 10;
// const employees: { name: string; age: number }[] = [
//     { name: "Gosho", age: 19 },
//     { name: "Maria", age: 21 },
//     { name: "Svilen", age: 19 },
//     { name: "Kiril", age: 54 },
//     { name: "Gergana", age: 29 },
// ];

// function getWage(salary: number, overtimeInHr: number): number {
//     return salary + (salary / 120) * overtimeInHr;
// }

// const wage = getWage(baseSalary, overtime);
// console.log("wage ", wage);

// function getAvgAgeForTheCompany(employees: { name: string; age: number }[]) {
//     let sumAge = 0;
//     employees.forEach((e) => {
//         sumAge += e.age;
//     });
//     baseSalary = 0;
//     return sumAge / employees.length;
// }

// const avgAge = getAvgAgeForTheCompany(employees);
// console.log({ avgAge });

// OOP like ----------------> encapsulated
//encapsulated - група от пропъртита и функции, които са обединени по смисъл (в обект-а по-долу)
const employee = {
    baseSalary: 3000,
    overtime: 10,
    // Uncle bob -> function without parameters is the best!
    getWage: function () {
        return this.baseSalary + this.overtime;
    }
}

employee.baseSalary = 4000;
employee.overtime = 12;
console.log(employee.getWage());

//Encapsulation--------------------------------

class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    getNameInCapitalLetters() {
        return this.name.toString();
    }

}

const p = new Person('Niki');
console.log(p.getNameInCapitalLetters());

//Abstraction
class Car {
    make: string;
    model: string;
    color: string;

    constructor(make: string, model: string, color: string) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    getDetails(): string {
        return `This car is made in ${this.make} and it is a model ${this.model} in ${this.color}`;
    }
}

const bwxCar = new Car('Germany', "BNW", "red");
console.log(bwxCar.getDetails());

class CarInfo {
    private horsePower: number;
    private engine: string;

    constructor(horsePower: number, engine: string) {
        this.horsePower = horsePower;
        this.engine = engine;
    }

    private getCoeffForDiesel() {
        return this.horsePower * 1.5;
    }

    private getCoeffForGas() {
        return this.horsePower * 21;
    }

    public getCoeff() {
        if (this.engine === "diesel") {
            return this.getCoeffForDiesel();
        }

        return this.getCoeffForGas();

    }
}

const car1 = new CarInfo(122, "diesel")
console.log(car1.getCoeff());

//Inheritance
class Mammal {
    move() {
        console.log('The Mammel is moving');
    }

    speek() {
        console.log('The Mammel is speaking');
    }
}

class Dog extends Mammal {
    constructor() {
        super();
    }
    //overwrite
    move() {
        console.log('The Dog is moving');
    }
}

class Cat extends Mammal {
    constructor() {
        super();

    }
}

class Mouse extends Mammal {
    constructor() {
        super();

    }
}

const dog = new Dog();
dog.move();
dog.speek();
const cat = new Dog();
cat.move();
cat.speek();



class MyHTMLElement {
    click() {
        console.log('click');
    }

    focus() {
        console.log('focus');
    }
}

class SelectBox extends MyHTMLElement { }
const selectBox = new SelectBox();

class CheckBox extends MyHTMLElement { }
const checkBox = new CheckBox();

//-----------------> Polymorphism 

interface Animal {
    move: () => void;
}

class Bird implements Animal {
    move() {
        console.log("Moving by walking on the ground!");
    }
}
class Lion implements Animal {
    move() {
        console.log("Moving by flying in the sky!");
    }
}
class Fish implements Animal {
    move() {
        console.log("Moving by swimming in the ocean!");
    }
}

const bird = new Bird();
const lion = new Lion();
const fish = new Fish();
bird.move();
lion.move();
fish.move();

/**--------- S O L I D-----------------------------  */

// Single responsibility

class Stundent {
    id: number;
    firstName: string;
    lastName: string;
    email: string;

    constructor() { }

    sendEmail() {
        // sends an email
    }

    enrol() {
        // to enrol student in a course
    }

    saveInDb() {
        // save the current student record in the DataBase
    }
}

class EmailService {
    // email functionality
}

class Student {
    // details for the student: id, marks, names etc
}

class EnrollmentService {
    // enrollment functionlity
}

// -------------------Open-Closed Principle
class CarInformation {
    //protected може да се достъпва в child класовете, които го унаследяват
    protected color: string;

    constructor(color: string) {
        this.color = color;
    }

    getMsgWithColor(): void {
        console.log("This car is in color: " + this.color);
    }
}

class VW extends CarInformation {
    private serialNumber: string;

    constructor(color: string, serialNumber: string) {
        //super класа все едно ни инстанцира колата, сякаш сме казали new CarInformation("red") и сме подали цвета
        super(color);
        this.serialNumber = serialNumber;
    }

    getSNDetails() {
        console.log(this.color + " - " + this.serialNumber);
    }
}

const myVW = new VW("red", "j2h3g4jh32gjh4");
myVW.getMsgWithColor();

//------- Interface seggregation
interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface Geo {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface UserFromDB {
    address: Address;
    company: Company;
    details: UserDetails;
}

interface UserDetails {
    id: number;
    name: string;
    username: string;
    email: string;
    phone?: string;
    website?: string;
}

class PersonUser implements UserDetails {
    id: number;
    name: string;
    username: string;
    email: string;
}

// ------------Dependency Inversion (Principle) -> Dependency Injection (Pattern)

class Wallet {
    balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }
}

class Course {
    courses: string[];

    constructor(courses: string[]) {
        this.courses = courses;
    }
}

class User {
    wallet: Wallet;
    username: string;
    courses: Course;

    constructor(wallet: Wallet, username: string, courses: Course) {
        this.wallet = wallet;
        this.username = username;
        this.courses = courses;
    }
}

const walletIvan = new Wallet(3000);
const coursesIvan = new Course(["JS", "HTML"]);
const userIvan = new User(walletIvan, "ivanUsername", coursesIvan)



const walletMaria = new Wallet(1000);
const coursesMaria = new Course(["JS", "C++"]);
const userMaria = new User(walletMaria, "usernameMaria", coursesMaria);

console.log("balance: ", userIvan.username, userIvan.wallet.balance);
console.log("courses", userIvan.courses.courses);

// Getters and setters

class PersonInfo {
    private _name: string;

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        //ако искаме да вкараме допълнотелна логика 
        return this._name.toLocaleUpperCase();
    }

    set name(newName: string) {
        if (newName.length <= 3) {
            throw new Error("The name must be a less than 4 characters");
        }

        this._name = newName;
    }
}

const personInfo = new PersonInfo('Petia');
personInfo.name = ("Olia");
console.log(personInfo.name);

// Abstract class - ползват се само за унаследяване
abstract class Color {
    hash: string;
  
    constructor(hash: string) {}
  
    fetchColorFromAPi() {
      console.log("fetch!");
    }
  }
  
  class Shape extends Color {}
  
  const s = new Shape("kajshdkjash");
  s.fetchColorFromAPi();
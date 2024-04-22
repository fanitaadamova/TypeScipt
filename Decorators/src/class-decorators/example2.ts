@registrationDate
class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const student = new Student("Mitko", 21);
console.log(student);


type Arg = { new(...args: any[]): {} };

function registrationDate<T extends Arg>(
    // baseClass e това, за което ще се закачим
    baseClass: T,
    context: ClassDecoratorContext
) {
    console.log("registrationDate invoked!");

    return class extends baseClass {

        dateOfRegistration = new Date().toISOString();

        constructor(...args: any[]) {
            super(...args);
        }
    };
}

@registrationDate
class StudentWithEmail extends Student {
    email: string;
    constructor(name: string, age: number, email: string) {
        super(name, age);
        this.email = email;

    }
}

const studentWithEmail = new StudentWithEmail("Mitko", 21, "mitko@gmail.com");
console.log(studentWithEmail);

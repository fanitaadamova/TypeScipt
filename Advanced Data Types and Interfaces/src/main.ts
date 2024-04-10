// -------- UNION TYPES - обединява типове

let x: number | null = null;
console.log(x);

setTimeout(() => {
    x = 5;
    console.log(x);

}, 3000);

//по default е по-добре да се сетва null, с цел проследимост и error handling
// Union type - combine multiple types in one type
let person: object | null = null;
setTimeout(() => {
    person = { name: "Gosho", city: "Pernik" };
    console.log(person);
}, 1000);

type Person = {
    name: string;
    city?: string;
    age?: number;
};

function toResetData(param: number | Person): void {
    if (typeof param === "number") {
        person = null;
    } else {
        person = param;
    }
}

// -------- INTERSECTION TYPES - обединява типове

type User = {
    name: string;
    email?: string;
    createdAt: number;
}

const user: User = {
    name: "Peter",
    email: "peter@gmail.com",
    createdAt: 121212,
}

type Animal = {
    furColor?: string;
    legsNumber: number;
    type: string;
};
const animal: Animal = { legsNumber: 4, type: "mammal", furColor: "yellow" };

// --------type AnimalUserType = Animal & User;

type AnimalUserType = {
    // Animal
    furColor?: string;
    legsNumber: number;
    type: string;
    // User
    username: string;
    email?: string;
    createdAt?: number;
};
const animalUser: AnimalUserType = {
    type: "fish",
    legsNumber: 0,
    username: "fishman123",
};
console.log(animalUser);

type Bird = {
    featherColor: string;
};

type Mammal = {
    furColor: string;
};

type MammalOrBird = Mammal | Bird;

const mammalOrBird: MammalOrBird = { featherColor: "golden" };
console.log(mammalOrBird);

// --------Literal TYPES--------------------------------------------------------
let apiCallStatus: "successful" | "failed";
apiCallStatus = "successful";
apiCallStatus = "failed";
console.log(apiCallStatus);

let errorStatus: 200 | 302;
errorStatus = 200;
console.log({ errorStatus });

// -------- TYPE ALIASES----------------------------------------------------------------
// type aliases са с главна буква
type Age = number;
type Student = {
    name: string;
    age: number;
}

const student: Student = { name: "Mitko", age: 21 };

const addStudentAge = (age: Age) => {
    student.age = age;
}

addStudentAge(23);
console.log(student);
console.log(`Student age: ${student.age}`);

// -------- TYPE KYof----------------------------------------------------------------

type Point = {
    x: number;
    y: number;
}

type PointKyeType = keyof Point; // 'x' | 'y'

const point: Point = { x: 10, y: 20 };
console.log(Object.keys(point));

type Colors = { red: string, blue: string };
type ColorKyes = keyof Colors;
const color: Colors = { red: 'cherven', blue: 'sin' };

// -------- RECURSIVE TYPEY----------------------------------------------------------------
//value е равно на същия тип, нестнати структури
type TreeNode1 = {
  left: TreeNode1;
  right: TreeNode1;
  value: number;
};

interface TreeNode2 {
  left: TreeNode2;
  right: TreeNode2;
  value: number;
}
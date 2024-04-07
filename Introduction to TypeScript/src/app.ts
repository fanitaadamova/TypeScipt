const a1: number = 5;

// Array
const arr1: number[] = [1, 2, 3, 4];
const arr2: Array<number> = [2, 3, 4, 5];
const arr3: string[] = ["Hello", "it is", "me"];
const arr4: boolean[] = [true, false, true];
const arr5: any[] = [123, "Hello", true, { name: "Ani" }];

// Tuple
let tuple: [string, number];
tuple = ['Hello', 11]; //valid


// Enum - gives sets of numeric values more readable names
// § By default each enum starts at 0
enum DaysOfTheWeek {
    M = 1,
    T,
    W,
    Th,
    F
};

//Any, unknown - dynamical values are
let x: unknown = 'hello';
x = true; //valid
x = 11; //valid

console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(tuple);
console.log(DaysOfTheWeek.F);
console.log(x);



// Void - не връща нищо
function sayHello(input: string): void {
    console.log(input);
    //doesn't has return value!
}

sayHello('Hello');

//Return Data Types
function fullName(name: string, lastName: string): string {
    return `${name} ${lastName}`;
}

console.log(fullName("Peter", "Ivanov"));

//Optinal params
function optionalParams(name: string, mail?: string) {
    console.log({name, mail});    
} 

optionalParams("Ani");
optionalParams("Ani2", "ani2@abv.bg");


// Return types in Functions
const getNum = (): number => 5;

const getNum2 = (): string => {
  return "hi!";
};

const getNum3 = function (): boolean {
  return true;
};

function getNum4(): undefined {
  return;
}

const getNum5: () => number = () => {
  return 5;
};







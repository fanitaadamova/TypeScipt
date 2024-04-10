// -------- UNION TYPES - обединява типове
let x = null;
console.log(x);
setTimeout(() => {
    x = 5;
    console.log(x);
}, 3000);
//по default е по-добре да се сетва null, с цел проследимост и error handling
// Union type - combine multiple types in one type
let person = null;
setTimeout(() => {
    person = { name: "Gosho", city: "Pernik" };
    console.log(person);
}, 1000);
function toResetData(param) {
    if (typeof param === "number") {
        person = null;
    }
    else {
        person = param;
    }
}
const user = {
    name: "Peter",
    email: "peter@gmail.com",
    createdAt: 121212,
};
const animal = { legsNumber: 4, type: "mammal", furColor: "yellow" };
const animalUser = {
    type: "fish",
    legsNumber: 0,
    username: "fishman123",
};
console.log(animalUser);
const mammalOrBird = { featherColor: "golden" };
console.log(mammalOrBird);
// --------Literal TYPES--------------------------------------------------------
let apiCallStatus;
apiCallStatus = "successful";
apiCallStatus = "failed";
console.log(apiCallStatus);
let errorStatus;
errorStatus = 200;
console.log({ errorStatus });
const student = { name: "Mitko", age: 21 };
const addStudentAge = (age) => {
    student.age = age;
};
addStudentAge(23);
console.log(student);
console.log(`Student age: ${student.age}`);
const point = { x: 10, y: 20 };
console.log(Object.keys(point));
const color = { red: 'cherven', blue: 'sin' };

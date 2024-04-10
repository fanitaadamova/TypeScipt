const userDefined = { githubToken: "", specialRights: false };
class Person1 {
    firstName;
    adress;
    age;
}
const person1 = {
    firstName: '',
    adress: '',
    age: 0,
};
const animal1 = {
    name: "Gosho",
    speak: () => {
        console.log("mewww");
    },
};
const getName = (param1, param2) => {
    return `Result - ${param1} ${param2}`;
};
console.log(getName(6, 'Fani'));

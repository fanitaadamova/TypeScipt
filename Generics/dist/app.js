// const getParamInfoNumber = (param: number): string => {
//     return `This is your param: ${param} and it is typeof ${typeof param}`;
// }
// const getParamInfoString = (param: string): string => {
//     return `This is your param: ${param} and it is typeof ${typeof param}`;
// }
// const getParamInfoObj = (param: object): string => {
//     return `This is your param: ${param} and it is typeof ${typeof param}`;
// }
//Do not repeat yourself
//това T е темплейт - каквато стойност зададем, такава ще ползваме
//function expresion
const getParamInfo = (param) => {
    return `This is your param: ${param} and it is typeof ${typeof param}.`;
};
//function declarations
function getParamInformation(param) {
    return `This is your param: ${param}.`;
}
const paramNumber = getParamInfo(123);
console.log(paramNumber);
const paramString = getParamInfo('test');
console.log(paramString);
const paramObj = getParamInfo({ name: "pesho", age: 35 });
console.log(paramObj);
const paramBolean = getParamInfo(true);
console.log(paramBolean);
const testNum = getParamInfo({ name: "Pesho", age: 25, id: 766968 });
console.log(testNum);
const testStr = getParamInfo({ name: "Pesho", age: 25, id: 'uwrurwjcs' });
console.log(testStr);
//////////-----------------------------
const attachID = (obj) => {
    const id = Math.round(Math.random() * 1000);
    return { ...obj, id };
};
const person = {
    name: "Fani",
    address: "Sofia, Bulgaris",
    age: 39,
};
const personWithID = attachID(person);
console.log(personWithID);
function fullName(obj) {
    return `The full name is ${obj.firstName} ${obj.lastName}.`;
}
const personData = {
    age: 35,
    address: "Sofia, Bulgaria",
    firstName: "Kiril",
    lastName: "Petrov"
};
const personData1 = fullName(personData);
console.log(personData1);

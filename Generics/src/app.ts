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
const getParamInfo = <T>(param: T): string => {
    return `This is your param: ${param} and it is typeof ${typeof param}.`;
}

//function declarations
function getParamInformation<T>(param: T) {
    return `This is your param: ${param}.`
}
function add<T>(param: T[]):void{
    console.log(param);

}


const paramNumber = getParamInfo(123);
console.log(paramNumber);

const paramString = getParamInfo('test');
console.log(paramString);

const paramObj = getParamInfo({ name: "pesho", age: 35 });
console.log(paramObj);

const paramBolean = getParamInfo(true);
console.log(paramBolean);

interface UserData<T> {
    name: string;
    age: number;
    id: T;
}

const testNum = getParamInfo<UserData<number>>({ name: "Pesho", age: 25, id: 766968 });
console.log(testNum);

const testStr = getParamInfo<UserData<string>>({ name: "Pesho", age: 25, id: 'uwrurwjcs' });
console.log(testStr);

//////////-----------------------------
const attachID = <T>(obj: T) => {
    const id = Math.round(Math.random() * 1000);
    return { ...obj, id }
}

type PersonType = {
    name: string;
    address: string;
    age: number;
}

const person: PersonType = {
    name: "Fani",
    address: "Sofia, Bulgaris",
    age: 39,
}

const personWithID = attachID(person);
console.log(personWithID);


//Generic Type Constraints - Constraints are enforced by extends keyword
//Ограниченията(правилата), с които сме задължени да се съобразим - т.е. в fullName фунцията, ние подаваме обект, които
// трябва да има полета за име и фамилия минимум 

//-------------------------//-----------------------------//-----------------------
interface FullName {
    firstName: string;
    lastName: string;
}

function fullName<T extends FullName>(obj: T) {
    return `The full name is ${obj.firstName} ${obj.lastName}.`;
}

const personData = {
    age: 35,
    address: "Sofia, Bulgaria",
    firstName: "Kiril",
    lastName: "Petrov"
}

const personData1 = fullName(personData);
console.log(personData1);

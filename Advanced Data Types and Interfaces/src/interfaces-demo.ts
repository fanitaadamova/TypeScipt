interface UserDefined {
    githubToken: string;
}

interface Admin extends UserDefined {
    specialRights: boolean
}
const userDefined: Admin = { githubToken: "", specialRights: false };

//Можем да ползваме interface, като договор, с който задължаваме нашия клас да имплементираме 
// дадените пропъртита, но да знаем, че можем да го ползваме като тип

interface PersonDetail {
    firstName: string;
    adress: string;
    age: number;
}

class Person1 implements PersonDetail {
    firstName: '';
    adress: '';
    age: 0;
}

const person1: PersonDetail = {
    firstName: '',
    adress: '',
    age: 0,
}

//Да съпоставим интерфейсите с типовете
interface A {
    a: number;
}

interface B extends A {
    b: number;
}
//a, b

type C = {
    c: number;
}
type D = {
    d: number;
} & C;
//c, d

// ------------Delcaration merging---------------------------------------
//обединяване, но не е много добра практика
interface Animal1 {
    name: string;
}

interface Animal1 {
    speak: () => void;
}

const animal1: Animal1 = {
    name: "Gosho",
    speak: () => {
        console.log("mewww");
    },
};

interface GetNameFunction {
    (param1: number, param2: string): string;
}

const getName: GetNameFunction = (param1: number, param2: string) => {
    return `Result - ${param1} ${param2}`;
};

console.log(getName(6, 'Fani'));

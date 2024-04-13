
type PersonData = {
    firstName: string;
    lastName: string;
    age: number;
}

function personInfo(firstName: string, lastName: string, age: string) {

    let data: PersonData = {
        firstName,
        lastName,
        age: parseInt(age),
    }

    return data;
}

console.log(personInfo("Peter", "Pan", "20"));
console.log(personInfo("George", "Smith", "18"));

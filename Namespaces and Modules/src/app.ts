namespace People {
    export class Person {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

}

const p = new People.Person("Htisto");
console.log(p.name);

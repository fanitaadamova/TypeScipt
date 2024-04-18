var People;
(function (People) {
    class Person {
        name;
        constructor(name) {
            this.name = name;
        }
    }
    People.Person = Person;
})(People || (People = {}));
const p = new People.Person("Htisto");
console.log(p.name);
//# sourceMappingURL=app.js.map
@printUrl
@printDataOfRegister
class BugReport {
    type = "report";
    title: string;

    constructor(currentTitle: string) {
        this.title = currentTitle;
    }
}

const bug = new BugReport("Needs dark mode");
console.log(bug.title); // Prints "Needs dark mode"
console.log(bug.type); // Prints "report"
console.log(bug)  // Prints all data for a bug report


type Arguments = { new(...args: any[]): {} };

function printDataOfRegister<T extends Arguments>(
    // baseClass e това, за което ще се закачим
    baseClass: T,
    context: ClassDecoratorContext
) {
    console.log("printDataOfRegister invoked!");

    return class extends baseClass {

        dateOfReport = new Date().toISOString();

        constructor(...args: any[]) {
            super(...args);
        }
    };
}

function printUrl<T extends Arguments>(
    baseClass: T,
    context: ClassDecoratorContext
) {
    return class extends baseClass {
        urlForBugs = 'https://...........';

        constructor(...args: any[]) {
            super(...args);
        }
    };
}


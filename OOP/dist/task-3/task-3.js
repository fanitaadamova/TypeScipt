class BankAccount {
    id = 0;
    ;
    balance;
    interestRate = 0.02;
    accountData = {};
    constructor() { }
    setInterestRate() {
        //TODO:
    }
    getInterest(idAcount, year) {
        //TODO:
    }
    deposit(idAcount, amount) {
        this.balance += amount + this.balance;
    }
    create() {
        this.id++;
        console.log(`Account ID${this.id} created`);
    }
}
let test = new BankAccount();
test.create();
test.create();
//# sourceMappingURL=task-3.js.map
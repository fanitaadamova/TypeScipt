class BankAccount {
    static currentId = 1;
    id;
    balance;
    static interestRate = 0.02;
    constructor() {
        this.id = BankAccount.currentId++;
        this.balance = 0;
    }
    static setInterestRate(interestRate) {
        BankAccount.interestRate = interestRate;
    }
    static getInterestRate() {
        return BankAccount.interestRate;
    }
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount} to ID${this.id}`);
    }
    getInterest(years) {
        return this.balance * Math.pow(1 + BankAccount.interestRate, years);
    }
    getId() {
        return this.id;
    }
}
class Bank {
    accounts;
    constructor() {
        this.accounts = [];
    }
    createAccount() {
        const account = new BankAccount();
        this.accounts.push(account);
        console.log(`Account ID${account.getId()} created`);
    }
    getAccountById(id) {
        return this.accounts.find(account => account.getId() === id);
    }
    deposit(id, amount) {
        let account = this.getAccountById(id);
        if (!account) {
            account = new BankAccount();
            console.log(`Account ID${account.getId()} created`);
            this.accounts.push(account);
        }
        account.deposit(amount);
    }
    setInterest(interestRate) {
        BankAccount.setInterestRate(interestRate);
        console.log(`Global interest rate set to ${interestRate}`);
    }
    getInterest(id, years) {
        const account = this.getAccountById(id);
        if (account) {
            const interest = account.getInterest(years);
            console.log(interest.toFixed(2));
        }
        else {
            console.log(`Account does not exist`);
        }
    }
}
function testClient(commands) {
    const bank = new Bank();
    for (const command of commands) {
        const tokens = command.split(" ");
        const action = tokens[0];
        switch (action) {
            case "Create":
                bank.createAccount();
                break;
            case "Deposit":
                const id = parseInt(tokens[1]);
                const amount = parseInt(tokens[2]);
                bank.deposit(id, amount);
                break;
            case "SetInterest":
                const interestRate = parseFloat(tokens[1]);
                bank.setInterest(interestRate);
                break;
            case "GetInterest":
                const getId = parseInt(tokens[1]);
                const years = parseInt(tokens[2]);
                bank.getInterest(getId, years);
                break;
            case "End":
                return;
        }
    }
}
const commands = [
    "Create",
    "Create",
    "Deposit 1 20",
    "GetInterest 1 10",
    "End"
];
testClient(commands);
//# sourceMappingURL=task-3.js.map
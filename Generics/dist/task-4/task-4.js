class CreateAccount {
    bankName;
    bankID;
}
class PersonalAccount extends CreateAccount {
    ownerName;
    money = 0;
    recentTransactions = {};
    constructor(bankName, bankID, ownerName) {
        super();
        this.ownerName = ownerName;
        this.bankName = bankName;
        this.bankID = bankID;
    }
    deposit(amount) {
        this.money += amount;
    }
    expense(amount, expenseType) {
        if (this.money - amount < 0) {
            throw new Error(`You cant make ${expenseType} transaction`);
        }
        else {
            if (this.recentTransactions.hasOwnProperty(expenseType)) {
                let currentAmount = this.recentTransactions[expenseType];
                this.recentTransactions[expenseType] = currentAmount + amount;
                this.money = this.money - amount;
            }
            else {
                this.recentTransactions[expenseType] = amount;
                this.money = this.money - amount;
            }
        }
    }
    showDetails() {
        let totalMoneySpentOnExpenses = 0;
        let transactionData = Object.entries(this.recentTransactions);
        transactionData.forEach((data) => {
            totalMoneySpentOnExpenses += data[1];
        });
        return `Bank name: ${this.bankName}\nBank ID: ${this.bankID}\nOwner name: ${this.ownerName}\nMoney: ${this.money}\nMoney spent: ${totalMoneySpentOnExpenses}`;
    }
}
let account = new PersonalAccount('DSK', 101240, 'Ivan Ivanov');
account.deposit(1000);
account.deposit(1000);
account.expense(700, 'Buy new phone');
account.expense(400, 'Book a vacation');
account.expense(400, 'Book a vacation');
account.expense(100, 'Buy food');
console.log(account.showDetails());
let account2 = new PersonalAccount('Fibank', 100000, 'Petar Petrol');
account2.deposit(10000);
account2.deposit(7000);
account2.expense(12000, 'Buy a new car');
account2.expense(200, 'Go to a fancy restaurant');
account2.expense(100, 'Go to a bar');
account2.expense(30, 'Go to the movies');
console.log(account2.showDetails());

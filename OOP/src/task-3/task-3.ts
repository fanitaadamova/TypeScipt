class BankAccount {
    private id: number = 0;;
    private balance: number;
    private interestRate: number = 0.02;

    private accountData:object = {};

    constructor() {}

    setInterestRate() {
        //TODO:
    }

    getInterest(idAcount: number, year: number) {
        //TODO:
    }

    deposit(idAcount: number, amount: number) {
        this.balance += amount + this.balance;
    
        
    }

    create(){
        this.id++;
        console.log(`Account ID${this.id} created`);
        
    }

}

let test = new BankAccount();
test.create();
test.create();
test.deposit(1,20)


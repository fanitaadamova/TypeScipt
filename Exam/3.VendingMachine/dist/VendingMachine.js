"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    buttonCapacity;
    drinks;
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const index = this.drinks.findIndex((drink) => drink.name === name);
        if (index !== -1) {
            this.drinks.splice(index, 1);
            return true;
        }
        return false;
    }
    getLongest() {
        const longestDrink = this.drinks.reduce((prev, curr) => prev.volume > curr.volume ? prev : curr);
        return `Name: ${longestDrink.name}, Price: $${longestDrink.price}, Volume: ${longestDrink.volume} ml`;
    }
    getCheapest() {
        const cheapestDrink = this.drinks.reduce((prev, curr) => prev.price < curr.price ? prev : curr);
        return `Name: ${cheapestDrink.name}, Price: $${cheapestDrink.price}, Volume: ${cheapestDrink.volume} ml`;
    }
    buyDrink(name) {
        const drink = this.drinks.find((drink) => drink.name === name);
        if (!drink)
            return `There is no ${name} in the vending machine!`;
        return `Name: ${drink.name}, Price: $${drink.price}, Volume: ${drink.volume} ml`;
    }
    get getCount() {
        return this.drinks.length;
    }
    report() {
        let report = `Drinks available:`;
        this.drinks.forEach((drink) => {
            report += `\nName: ${drink.name}, Price: $${drink.price}, Volume: ${drink.volume} ml`;
        });
        return report;
    }
}
exports.VendingMachine = VendingMachine;
//# sourceMappingURL=VendingMachine.js.map
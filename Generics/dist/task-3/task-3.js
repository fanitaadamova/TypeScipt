class Dealership1 {
    dealershipName;
    soldCars;
    //modelsSold: { [key: string]: T };
    modelsSold = {};
    constructor(dealershipName) {
        this.dealershipName = dealershipName;
        this.soldCars = 0;
        this.modelsSold = {};
    }
    sellCar(dealerID, model) {
        this.modelsSold[dealerID] = model;
        this.soldCars++;
    }
    showDetails() {
        let details = `${this.dealershipName}:`;
        let entries = Object.entries(this.modelsSold);
        entries.forEach(entry => {
            let [key, value] = entry;
            details += `\n${key} sold  ${value}`;
        });
        return details;
    }
}
let dealership = new Dealership1('SilverStar');
dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());

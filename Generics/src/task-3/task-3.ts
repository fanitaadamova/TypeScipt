interface Dealership<T> {
    dealershipName: T;
    soldCars: number;
}

interface Actions<T> {
    sellCar(dealerID: T, model: T): void;
}

class Dealership1<T> implements Dealership<T>, Actions<T> {
    dealershipName: T;
    soldCars: number;
    //modelsSold: { [key: string]: T };
    modelsSold: object = {};

    constructor(dealershipName: T) {
        this.dealershipName = dealershipName;
        this.soldCars = 0;
        this.modelsSold = {};
    }

    sellCar(dealerID: T, model: T): void {
        this.modelsSold[dealerID as unknown as string] = model;
        this.soldCars++;
    }



    showDetails(): string {
        let details = `${this.dealershipName}:`
        let entries = Object.entries(this.modelsSold);
        
        entries.forEach(entry => {
            let [key, value] = entry;
            details += `\n${key} sold  ${value}`;
        })

        return details;
    }
}

let dealership = new Dealership1('SilverStar');

dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());



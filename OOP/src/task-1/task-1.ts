class Car1 {
    brand: string;
    model: string;
    horsePower: number;

    constructor(brand: string, model: string, horsePower: number) {
        this.brand = brand;
        this.model = model;
        this.horsePower = horsePower;
    }

    getCarInfo() {
        return `The car is: ${this.brand} ${this.model} – ${this.horsePower} HP.`
    }

}

const car4 = new Car1("Chevrolet", "Impala", 390);
console.log(car4.getCarInfo());


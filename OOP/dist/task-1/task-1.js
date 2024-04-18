class Car1 {
    brand;
    model;
    horsePower;
    constructor(brand, model, horsePower) {
        this.brand = brand;
        this.model = model;
        this.horsePower = horsePower;
    }
    getCarInfo() {
        return `The car is: ${this.brand} ${this.model} – ${this.horsePower} HP.`;
    }
}
const car4 = new Car1("Chevrolet", "Impala", 390);
console.log(car4.getCarInfo());
//# sourceMappingURL=task-1.js.map
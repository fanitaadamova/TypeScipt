//-----------------Singleton Pattern----------
// ensures a class has only one instance and provides a global point of access
class Singleton {
    static instance = null;
    constructor() { }
    static getInstance() {
        if (this.instance === null) {
            this.instance = new Singleton();
        }
        return this.instance;
    }
}
//Спрели сме нашия клас да може да се инстанцира отвън - ако имаме инстанция я връщаме, ако нямаме я създаваме
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
const a = { name: "Pesho" };
const b = { name: "Pesho" };
console.log(a === b);
console.log(instance1 === instance2);

class PriceOfProduct {
    productName: string;
    price: number;

    constructor(productName: string, price: number) {
        this.productName = productName;
        this.price = price;
        console.log(`Product ${productName} - price without VAT ${price} lv.`);        
    }

    @withVat(20)
    getPrice() {
        console.log( `${this.productName} - ${(this.price).toFixed(2)} lv!`);
       
    }
}

const orange = new PriceOfProduct("Orange", 2);
console.log(orange);
orange.getPrice();

const banana = new PriceOfProduct("Banana", 2.50);
console.log(banana);
banana.getPrice();

type WithVat = {
    price: number;
};

//using closure
// DECORATOR's scope
function withVat<T extends WithVat>(persentage: number) {
    // Connect between CLASS and FUNCTION
    return function (target: Function, context: ClassMethodDecoratorContext) {
        // FUNCTION's scope => fixBugInProduction/writeTest
        return function (...args: any) {
            const instance = this as T; // T -> our decorate class

            if (instance.price > 0) {
                instance.price += instance.price  * persentage / 100;
                target.apply(instance, args); // calls our method
            } else {
                
            }
        };
    };
}
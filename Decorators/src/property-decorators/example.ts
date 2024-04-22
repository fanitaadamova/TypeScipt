//field
type Product = {
    name: string;
    type: "fruit" | "vegetable" | "pasta";
    quantity: number;
};

class Shop {
    @initialAvailability
    shopArticles: Product[] = [];

    addMoreProduct(name: string, type: "fruit" | "vegetable" | "pasta", quantity: number) {
        if (this.shopArticles.some((item) => item.hasOwnProperty(name))) {
            console.log(`Product ${name} already exists!`);
            return
        }
        this.shopArticles.push({ name, type, quantity });
    }
}

const shop1 = new Shop();
shop1.addMoreProduct('Cherry', "fruit", 53);
shop1.addMoreProduct('Strawberry', "fruit", 33);
console.log(`In the shop1 there is ${shop1.shopArticles.length} type of product.`);
console.log(shop1);

const shop2 = new Shop();
console.log(`In the shop2 there is ${shop2.shopArticles.length} type of product.`);
console.log(shop2);

// Decorator scope
function initialAvailability<T, V extends Product[]>(
    target: undefined,
    context: ClassFieldDecoratorContext
) {
    // Property scope
    return function (fieldValue: V) {
        // API call -> async
        fieldValue.push({ name: "Banana", type: "fruit", quantity: 21 });
        fieldValue.push({ name: "Orange", type: "fruit", quantity: 15 });
        fieldValue.push({ name: "Tomatoes", type: "vegetable", quantity: 32 });
        fieldValue.push({ name: "Bread", type: "pasta", quantity: 56 });

        return fieldValue;
    };
}
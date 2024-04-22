var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
let PriceOfProduct = (() => {
    let _instanceExtraInitializers = [];
    let _getPrice_decorators;
    return class PriceOfProduct {
        static {
            _getPrice_decorators = [withVat(20)];
            __esDecorate(this, null, _getPrice_decorators, { kind: "method", name: "getPrice", static: false, private: false, access: { has: obj => "getPrice" in obj, get: obj => obj.getPrice } }, null, _instanceExtraInitializers);
        }
        productName = (__runInitializers(this, _instanceExtraInitializers), void 0);
        price;
        constructor(productName, price) {
            this.productName = productName;
            this.price = price;
            console.log(`Product ${productName} - price without VAT ${price} lv.`);
        }
        getPrice() {
            console.log(`${this.productName} - ${(this.price).toFixed(2)} lv!`);
        }
    };
})();
const orange = new PriceOfProduct("Orange", 2);
console.log(orange);
orange.getPrice();
const banana = new PriceOfProduct("Banana", 2.50);
console.log(banana);
banana.getPrice();
//using closure
// DECORATOR's scope
function withVat(persentage) {
    // Connect between CLASS and FUNCTION
    return function (target, context) {
        // FUNCTION's scope => fixBugInProduction/writeTest
        return function (...args) {
            const instance = this; // T -> our decorate class
            if (instance.price > 0) {
                instance.price += instance.price * persentage / 100;
                target.apply(instance, args); // calls our method
            }
            else {
            }
        };
    };
}

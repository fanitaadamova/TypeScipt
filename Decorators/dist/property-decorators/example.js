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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
let Shop = (() => {
    let _instanceExtraInitializers = [];
    let _shopArticles_decorators;
    let _shopArticles_initializers = [];
    return class Shop {
        static {
            _shopArticles_decorators = [initialAvailability];
            __esDecorate(null, null, _shopArticles_decorators, { kind: "field", name: "shopArticles", static: false, private: false, access: { has: obj => "shopArticles" in obj, get: obj => obj.shopArticles, set: (obj, value) => { obj.shopArticles = value; } } }, _shopArticles_initializers, _instanceExtraInitializers);
        }
        shopArticles = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _shopArticles_initializers, []));
        addMoreProduct(name, type, quantity) {
            if (this.shopArticles.some((item) => item.hasOwnProperty(name))) {
                console.log(`Product ${name} already exists!`);
                return;
            }
            this.shopArticles.push({ name, type, quantity });
        }
    };
})();
const shop1 = new Shop();
shop1.addMoreProduct('Cherry', "fruit", 53);
shop1.addMoreProduct('Strawberry', "fruit", 33);
console.log(`In the shop1 there is ${shop1.shopArticles.length} type of product.`);
console.log(shop1);
const shop2 = new Shop();
console.log(`In the shop2 there is ${shop2.shopArticles.length} type of product.`);
console.log(shop2);
// Decorator scope
function initialAvailability(target, context) {
    // Property scope
    return function (fieldValue) {
        // API call -> async
        fieldValue.push({ name: "Banana", type: "fruit", quantity: 21 });
        fieldValue.push({ name: "Orange", type: "fruit", quantity: 15 });
        fieldValue.push({ name: "Tomatoes", type: "vegetable", quantity: 32 });
        fieldValue.push({ name: "Bread", type: "pasta", quantity: 56 });
        return fieldValue;
    };
}

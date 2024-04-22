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
let Task = (() => {
    let _instanceExtraInitializers = [];
    let _nameOfTask_decorators;
    let _nameOfTask_initializers = [];
    return class Task {
        static {
            _nameOfTask_decorators = [watchChange];
            __esDecorate(this, null, _nameOfTask_decorators, { kind: "accessor", name: "nameOfTask", static: false, private: false, access: { has: obj => "nameOfTask" in obj, get: obj => obj.nameOfTask, set: (obj, value) => { obj.nameOfTask = value; } } }, _nameOfTask_initializers, _instanceExtraInitializers);
        }
        #nameOfTask_accessor_storage = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _nameOfTask_initializers, "Simple task"));
        get nameOfTask() { return this.#nameOfTask_accessor_storage; }
        set nameOfTask(value) { this.#nameOfTask_accessor_storage = value; }
    };
})();
const task = new Task();
console.log(task.nameOfTask);
task.nameOfTask = "More complex task!";
function watchChange(accessor, context) {
    return {
        get: function () {
            //   console.log("get: ", this);
            return accessor.get.call(this);
        },
        set: function (value) {
            //   console.log("this", this);
            //   console.log("value", value);
            //Можем да си правим валидация на value
            if (value.toString().length > 10) {
                console.log(`The property "${context.name.toString()}" from class ${this.constructor.name} has been set to "${value}" with character ${value.toString().length}`);
                accessor.set.call(this, value);
            }
            else if (value.toString().length > 0) {
                console.log(`The property "${context.name.toString()}" from class ${this.constructor.name} has been set to "${value}" with character ${value.toString().length}`);
                accessor.set.call(this, value);
            }
            else {
                throw new Error(`The property "${context.name.toString()}" should not be empty!`);
            }
        },
    };
}

class Task {
    @watchChange
    // auto-accessor -> autogenerates getter and setter for our class protype
    accessor nameOfTask: string = "Simple task";
}

const task = new Task();
console.log(task.nameOfTask);
task.nameOfTask = "More complex task!";

type AccessorType<T, V> = {
    get: (this: T) => V;
    set: (this: T, value: V) => void;
};

function watchChange<T, V>(
    accessor: AccessorType<T, V>,
    context: ClassAccessorDecoratorContext
) {
    return {
        get: function (this: T) {
            //   console.log("get: ", this);
            return accessor.get.call(this);
        },
        set: function (this: T, value: V) {
            //   console.log("this", this);
            //   console.log("value", value);
            //Можем да си правим валидация на value
            if (value.toString().length > 10) {
                console.log(`The property "${context.name.toString()}" from class ${this.constructor.name} has been set to "${value}" with character ${value.toString().length}`);
                accessor.set.call(this, value);
            } else if (value.toString().length > 0) {
                console.log(`The property "${context.name.toString()}" from class ${this.constructor.name} has been set to "${value}" with character ${value.toString().length}`);
                accessor.set.call(this, value);
            } else {
                throw new Error(`The property "${context.name.toString()}" should not be empty!`);

            }

        },
    };
}
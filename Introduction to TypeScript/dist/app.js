"use strict";
const a1 = 5;
// Array
const arr1 = [1, 2, 3, 4];
const arr2 = [2, 3, 4, 5];
const arr3 = ["Hello", "it is", "me"];
const arr4 = [true, false, true];
const arr5 = [123, "Hello", true, { name: "Ani" }];
// Tuple
let tuple;
tuple = ['Hello', 11]; //valid
// Enum - gives sets of numeric values more readable names
// § By default each enum starts at 0
var DaysOfTheWeek;
(function (DaysOfTheWeek) {
    DaysOfTheWeek[DaysOfTheWeek["M"] = 1] = "M";
    DaysOfTheWeek[DaysOfTheWeek["T"] = 2] = "T";
    DaysOfTheWeek[DaysOfTheWeek["W"] = 3] = "W";
    DaysOfTheWeek[DaysOfTheWeek["Th"] = 4] = "Th";
    DaysOfTheWeek[DaysOfTheWeek["F"] = 5] = "F";
})(DaysOfTheWeek || (DaysOfTheWeek = {}));
;
//Any, unknown - dynamical values are
let x = 'hello';
x = true; //valid
x = 11; //valid
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
console.log(arr5);
console.log(tuple);
console.log(DaysOfTheWeek.F);
console.log(x);
// Void - не връща нищо
function sayHello(input) {
    console.log(input);
    //doesn't has return value!
}
sayHello('Hello');
//Return Data Types
function fullName(name, lastName) {
    return `${name} ${lastName}`;
}
console.log(fullName("Peter", "Ivanov"));
//Optinal params
function optionalParams(name, mail) {
    console.log({ name, mail });
}
optionalParams("Ani");
optionalParams("Ani2", "ani2@abv.bg");
// Return types in Functions
const getNum = () => 5;
const getNum2 = () => {
    return "hi!";
};
const getNum3 = function () {
    return true;
};
function getNum4() {
    return;
}
const getNum5 = () => {
    return 5;
};

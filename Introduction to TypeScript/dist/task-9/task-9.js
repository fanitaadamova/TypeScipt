"use strict";
function employees(arrayInput) {
    arrayInput.forEach((element) => {
        console.log(`Name: ${element} -- Personal Number: ${element.length}`);
    });
}
console.log(employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal']));

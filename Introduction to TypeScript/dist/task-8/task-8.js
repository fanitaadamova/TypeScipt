"use strict";
function cats(arrayOfCats) {
    arrayOfCats.forEach(cat => {
        let [name, age] = cat.split(' ');
        console.log(`${name}, age ${age} says Meow`);
    });
}
cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);

//Intersection types

function inventory(arrayInput: Array<string>) {

    arrayInput.forEach(element => {
        let [heroName, level, items] = element.split(' / ');
        console.log(`Hero: ${heroName}`);
        console.log(`level => ${parseInt(level)}`)
        console.log(`items => ${items}`);
    })

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);


function townPopulation(arrayInput: string[]) {
    let townsPopulationData: object = {};

    arrayInput.forEach(element => {
        let [town, population] = element.split(" <-> ");

        if (townsPopulationData.hasOwnProperty(town)) {
            let oldPopulationData = townsPopulationData[town];
            let newPopulationData = oldPopulationData + Number(population);

            townsPopulationData[town] = newPopulationData;
        } else {
            townsPopulationData[town] = Number(population);
        }

    })

    let entries = Object.entries(townsPopulationData);
    
    entries.forEach(entry => {
        let [key, value] = entry;

        console.log(`${key}: ${value}`);
    })
    
}


townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
);
console.log(`--------------`);

townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
);
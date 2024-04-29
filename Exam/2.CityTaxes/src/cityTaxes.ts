type Taxi = {
    name: string;
    population: number;
    treasury: number;
    taxRate: number;
    collectTaxes: () => void;
    applyGrowth: (percentage: number) => void;
    applyRecession: (percentage: number) => void;
}

function cityTaxes(nameOfCity: string, population: number, treasury: number): Taxi {
    const taxRate = 10;

    let taxi: Taxi;

    const collectTaxes = () => {
        taxi.treasury += Math.floor(population * taxRate);
    };

    const applyGrowth = (percentage: number) => {
        taxi.population = Math.floor(population * (1 + percentage / 100));
    };

    const applyRecession = (percentage: number) => {
        const decreaseAmount = Math.floor(treasury * (percentage / 100));
        taxi.treasury -= decreaseAmount;
    };

    taxi = {
        name: nameOfCity,
        population,
        treasury,
        taxRate,
        collectTaxes: collectTaxes,
        applyGrowth: applyGrowth,
        applyRecession: applyRecession
    }

    return taxi;
}



const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);




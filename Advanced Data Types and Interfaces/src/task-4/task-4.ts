type TownData = {
    town: string;
    latitude: string;
    longitude: string;
}

function towns(arrayInput: string[]) {
    arrayInput.forEach(element => {
        const [townData, latitudeData, longitudeData] = element.split(" | ");

        const towndata: TownData = {
            town: townData,
            latitude: latitudeData,
            longitude: longitudeData
        }

        console.log(towndata);

    });
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
towns(['Plovdiv | 136.45 | 812.575']);
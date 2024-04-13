function lowestPricesInCities(arrayInput) {
    let objOfProducts = {};
    arrayInput.forEach(element => {
        let [townName, productName, productPrice] = element.split(' | ');
        if (!objOfProducts.hasOwnProperty(productName)) {
            objOfProducts[productName] = [Number(productPrice), townName];
        }
        else {
            let currentPrice = objOfProducts[productName][0];
            if (Number(productPrice) > currentPrice) {
                objOfProducts[productName] = [productPrice, townName];
            }
        }
    });
    let entries = Object.entries(objOfProducts);
    entries.forEach((product) => {
        let [productName, productInfo] = product;
        console.log(`${productName} -> ${productInfo[0]} (${productInfo[1]})`);
    });
}
lowestPricesInCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
//# sourceMappingURL=task-6.js.map
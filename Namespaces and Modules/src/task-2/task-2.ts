// Create a namespace FoodAndBeverages, in one file, that exports an interface Delivery, which supports the following declarations:
// ·	newCustomer(customerName: string, visited: boolean)
// ·	visitCustomer(customerName: string) - this method returns a string
// ·	showCustomers() - this method returns a string
/// <reference path="delivery.ts" />

class Courier implements FoodAndBeverages.Delivery {
    protected placesToVisit: object[];

    constructor(placesToVisit: Array<object>) {
        this.placesToVisit = placesToVisit;
    }

    newCustomer(customer: string): string {
        this.placesToVisit.forEach((place: object) => {
            if (place['customerName'] == customer) {
                throw new Error(`${customer} is already a customer of yours!`)
            }
        })

        this.placesToVisit.push({ customerName: customer, visited: false })

        return `${customer} just became your client.`

    }

    visitCustomer(customer: string) {
        let isNotCustomer = true;
        this.placesToVisit.forEach((place) => {
            if (place['customerName'] === customer) {
                place['visited'] = true;
                isNotCustomer = false;
                return;
            }
        })

        if (isNotCustomer) {
            throw new Error(`${customer} is not your customer.`)
        }

    }


    showCustomers(): string {
        let result = [];
        this.placesToVisit.forEach((place)=>{
              result.push(`${place['customerName']} -> ${place['visited']}`);
        })

        return result.join('\n');

    }

}


let courier = new Courier([{ customerName: 'DHL', visited: false }]);

courier.newCustomer('Speedy');
courier.newCustomer('MTM');
courier.newCustomer('TipTop');

courier.visitCustomer('DHL');
courier.visitCustomer('MTM');
courier.visitCustomer('MTM');

console.log(courier.showCustomers());

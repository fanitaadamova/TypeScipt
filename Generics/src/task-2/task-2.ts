class CompareElements<T> {
    params: T[];

    constructor(params: T[]) {
        this.params = params;
    }

    compare(element: T): number {
        let countOfMatch: number = 0;
        
        this.params.forEach((param) => {
            if (param === element) {
                countOfMatch++;
            }
        })

        return countOfMatch;
    }
}

let c1 = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
console.log(c1.compare('b'));

let c2 = new CompareElements([1, 2, 3, 4, 5, 1, 1]);
console.log(c2.compare(1));

export default class Product {
    private name: string;
    private price: number;

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    public getName() {
        return this.name;
    }

    public getPrice() {
        return this.price;
    }
}
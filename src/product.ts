import Offer from './offer';
export default class Product {
    private name: string;
    private price: number;
    private offer: Offer;

    constructor(name, price, offer?) {
        this.name = name;
        this.price = price;
        this.offer = offer || null;
    }

    public getName() {
        return this.name;
    }

    public getPrice() {
        return this.price;
    }

    public getOffer(){
        return this.offer;
    }

}
export default class Offer {
    x: number;
    y: number;
    constructor(X: number, Y: number) {
        this.x = X;
        this.y = Y;
    }
    calculateDiscount(unitPrice: number, quantity: number) {
        let discount : number = 0;
        if (quantity >= this.x) {
            // then user is applicable for discount
            discount = Math.floor((quantity*this.y)/this.x) * unitPrice;
        } 
        return discount;
    }
}
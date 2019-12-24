import { utils } from './utils';
import Product from './product';

export default class ShoppingCart {
    private productStore: any;
    constructor() {
        this.productStore = {};
    }
    public getItemQuantity(name: string): number {
        return this.productStore[name].quantity;
    }

    public getItemUnitPrice(name): string {
        return this.productStore[name].unitPrice;
    }

    private storeProductToCart(product: Product, quantity: number): void {
        const productName: string = product.getName();
        if (!this.productStore[productName]) {
            this.productStore[productName] = { unitPrice: product.getPrice(), quantity: quantity }
        } else {
            this.productStore[productName].quantity += quantity;
        }
    }

    public addItem(product, quantity): void {
        this.storeProductToCart(product, quantity);
    }

    public getTotalPrice(tax: number): number {
        let cartPrice: number = 0;
        for (let prop of Object.keys(this.productStore)) {
            const product = this.productStore[prop];
            cartPrice += product.unitPrice * product.quantity;
        }
        return utils.roundToTwoDecimalPlaces(cartPrice + this.getTotalTaxAmount(tax));
    }

    public getTotalTaxAmount(tax): number {
        let totSalesTax: number = 0;
        for (let prop of Object.keys(this.productStore)) {
            const product: any = this.productStore[prop];
            totSalesTax += utils.roundToTwoDecimalPlaces((product.unitPrice * (tax / 100)) * product.quantity);
        }
        return totSalesTax;
    }
}

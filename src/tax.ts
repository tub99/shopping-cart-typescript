import { utils } from './utils';
export default class Tax {
    private tax: number;
    constructor(taxAmt) {
        this.tax = taxAmt;
    }

    public getTaxPerecntage() : number {
        return this.tax;
    }

}
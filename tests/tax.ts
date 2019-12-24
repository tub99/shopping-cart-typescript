import { expect } from 'chai';
import Tax from './../src/tax';

describe('Tax', function () {
    let tax: Tax;

    beforeEach(() => {
        tax = new Tax(12.5);
    });

    it('should create a Tax object', function () {
        expect(tax).not.to.be.undefined;
    });

    it('should get tax percentage', () => {
        expect(tax.getTaxPerecntage()).to.equal(12.5);
    });

});
import { expect } from 'chai';
import Product from '../src/product';
import ShoppingCart from './../src/shoppingCart';
import Tax from './../src/tax';
import Offer from './../src/offer';

describe('Shopping Cart', () => {
    let cart: ShoppingCart, tax: Tax;
    beforeEach(() => {
        cart = new ShoppingCart();
        tax = new Tax(12.5);
    })
    it('should create cart instance', () => {
        expect(cart).not.to.be.undefined;
    });

    describe('Adding 2 Dove soaps and then 2 Axe Deo soaps to cart', () => {
        let soap: Product, deo: Product, taxPcnt: number;
        beforeEach(() => {
            soap = new Product('Dove', 39.99);
            deo = new Product('Axe Deo', 99.99);
            cart.addItem(soap, 2);
            cart.addItem(deo, 2);
            taxPcnt = tax.getTaxPerecntage();
        });

        it('should contain 2 Dove soaps  each with a unit price of 39.99', () => {
            const soapName: string = soap.getName();
            expect(cart.getItemQuantity(soapName)).to.equal(2);
            expect(cart.getItemUnitPrice(soapName)).to.equal(39.99);
        });

        it('should contain 2 Axe Deoa  each with a unit price of 99.99', () => {
            const deoName: string = deo.getName();
            expect(cart.getItemQuantity(deoName)).to.equal(2);
            expect(cart.getItemUnitPrice(deoName)).to.equal(99.99);
        });

        it('should check carts total tax to equal 35.00', () => {
            expect(cart.getTotalTaxAmount(taxPcnt)).to.equal(35.00);
        });
        it('should check carts total price should equal 314.96', () => {
            expect(cart.getTotalPrice(taxPcnt)).to.equal(314.96);
        })
    });
    describe('Product Offers', ()=>{
        let soap: Product, deo: Product, offer: Offer, taxPcnt: number;
        beforeEach(() => {
            offer = new Offer(2,1);
            soap = new Product('Dove', 39.99, offer);
            deo = new Product('Axe Deo', 99.99);
            cart.addItem(soap, 3);
            taxPcnt = tax.getTaxPerecntage();
        });

        it('should contain 2 Dove soaps  each with a unit price of 39.99', () => {
            const soapName: string = soap.getName();
            expect(cart.getItemQuantity(soapName)).to.equal(3);
            expect(cart.getItemUnitPrice(soapName)).to.equal(39.99);
        });
        it('should check carts total tax to equal 10.00', () => {
            expect(cart.getTotalTaxAmount(taxPcnt)).to.equal(10.00);
        });
        it('should check carts total discount to be 39.99', () => {
            expect(cart.getTotalDiscount()).to.equal(39.99);
        });

    })

});
import { expect } from 'chai';
import { utils } from '../src/utils';

describe('Utils', function () {
    it('should check rounding to two decimal places for 32.44578 to 32.45', function () {
        expect(utils).not.to.be.undefined;
        const roundedNumber: number = utils.roundToTwoDecimalPlaces(32.44578);
        expect(roundedNumber).to.equal(32.45);
    });
});
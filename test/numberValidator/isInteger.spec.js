import NumbersValidator from "../../app/NumbersValidator.js";
import {expect} from "chai";
import {it} from "mocha";

describe('isInteger', () => {
    let validator;

    beforeEach(function () {
        validator = new NumbersValidator();
    })

    afterEach(function () {
        validator = null;
    })

    it('should return true when provided an integer', () => {
        expect(validator.isInteger(4)).to.be.true;
    });

    it('should return true when provided an non-integer', () => {
        expect(validator.isInteger(4.5)).to.be.false;
    });

    it('should throw an error when provided a String',  () => {
        expect(() => {
            validator.isInteger("4");
        }).to.throw(`[4] is not a number`);
    });
});